/* verloren.js: header speeds + keyboard shortcuts for the stock qBittorrent WebUI */
(function(){
  function $(s){return document.querySelector(s)}
  function txt(id){var e=document.getElementById(id);return e?e.textContent:''}
  function build(){
    var nav=$('#desktopNavbar');if(!nav||$('#vStats'))return;
    var d=document.createElement('div');d.id='vStats';
    d.innerHTML='<span class="d">\u2193<b id="vD">-</b></span><span class="u">\u2191<b id="vU">-</b></span><span class="free">free<b id="vF">-</b></span>';
    nav.appendChild(d);
    setInterval(upd,1000);upd();
  }
  function upd(){
    var a=txt('DlInfos').split(' (')[0],b=txt('UpInfos').split(' (')[0],f=txt('freeSpaceOnDisk').replace(/^[^:]*:\s*/,'');
    var x=document.getElementById('vD');if(x)x.textContent=a||'-';
    x=document.getElementById('vU');if(x)x.textContent=b||'-';
    x=document.getElementById('vF');if(x)x.textContent=f||'-';
  }
  function rows(){return Array.prototype.slice.call(document.querySelectorAll('#torrentsTableDiv tbody tr')).filter(function(r){return r.offsetParent!==null})}
  var cur=-1;
  function mark(){var r=rows();r.forEach(function(x,i){x.classList.toggle('vcur',i===cur)});if(r[cur])r[cur].scrollIntoView({block:'nearest'})}
  function click(el,add){if(el)el.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window,ctrlKey:!!add}))}
  function sel(){return document.querySelectorAll('#torrentsTableDiv tbody tr.selected')}
  document.addEventListener('keydown',function(e){
    var t=e.target,tag=t&&t.tagName;
    if(e.ctrlKey||e.metaKey||e.altKey)return;
    if(tag==='INPUT'||tag==='TEXTAREA'||tag==='SELECT'||(t&&t.isContentEditable))return;
    if(document.querySelector('.mochaWindow,.mocha:not(#desktop)'))return;
    var r=rows(),k=e.key;
    if(k==='j'||k==='k'){e.preventDefault();cur=Math.max(0,Math.min(r.length-1,(cur<0?-1:cur)+(k==='j'?1:-1)));mark();click(r[cur],false)}
    else if(k===' '&&r[cur]){e.preventDefault();click(r[cur],true)}
    else if(k==='p'){var s=sel();if(!s.length)return;var run=false;s.forEach(function(x){if(/stateDownloading|stateUploading|stateForced|stateStalled|stateQueued|stateChecking/.test(x.innerHTML))run=true});click($(run?'#stopButton':'#startButton'),false)}
    else if(k==='d'&&sel().length){click($('#deleteButton'),false)}
    else if(k==='a'){e.preventDefault();click($('#downloadButton'),false)}
    else if(k==='/'){e.preventDefault();var f=$('#torrentsFilterInput');if(f)f.focus()}
    else if(k==='Escape'){var rr=sel();if(rr.length&&r[0])click(rr[0],true)}
  });
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build);else build();
  setTimeout(build,1500);

  /* ===== phone mode ===== */
  var mq=window.matchMedia('(max-width:760px)');
  function isPhone(){return mq.matches}
  var NEED={name:1,progress:1,status:1,dlspeed:1,upspeed:1,eta:1,size:1,ratio:1};
  function tagRows(){
    if(!isPhone())return;
    var ths=document.querySelectorAll('#torrentsTableDiv thead th');if(!ths.length)return;
    var names=[],sig='';
    for(var i=0;i<ths.length;i++){var m=/column_(\w+)/.exec(ths[i].className);names.push(m?m[1]:'x');}
    sig=names.join(',');
    var trs=document.querySelectorAll('#torrentsTableDiv tbody tr');
    for(var r=0;r<trs.length;r++){
      var tr=trs[r],tds=tr.children;
      if(tr.getAttribute('data-vs')!==sig){for(var c=0;c<tds.length&&c<names.length;c++){tds[c].className=tds[c].className.replace(/\bc-\w+\b/g,'').trim();tds[c].classList.add('c-'+names[c])}tr.setAttribute('data-vs',sig)}
      for(var c2=0;c2<tds.length;c2++){
        var td=tds[c2];
        if(td.classList.contains('c-progress')){var pd=td.querySelector('.progressbar_dark'),t=((pd||td).textContent||'').trim(),v=parseFloat(t);if(!isNaN(v)){td.style.setProperty('--p',v);td.setAttribute('data-p',t)}}
        else if(td.classList.contains('c-dlspeed')||td.classList.contains('c-upspeed')){var z=/^0\s*(B|\u0411)\/(s|\u0441)/i.test((td.textContent||'').trim());if(z)td.setAttribute('data-z','1');else td.removeAttribute('data-z')}
        else if(td.classList.contains('c-eta')){if(/\u221e|^\s*$/.test(td.textContent||''))td.setAttribute('data-z','1');else td.removeAttribute('data-z')}
      }
    }
  }
  function sync(){
    var n=sel().length,h=document.documentElement;
    h.classList.toggle('v-sel',n>0&&isPhone());
    var c=document.getElementById('vCount');if(c)c.textContent=n||'';
    if(!n)h.classList.remove('v-details');
  }
  function mkBtn(label,icon,fn,cls){
    var b=document.createElement('button');b.type='button';b.className=cls||'';
    b.innerHTML=(icon?'<img src="images/'+icon+'" alt="">':'<span class="more">\u22EF</span>')+'<span>'+label+'</span>';
    b.addEventListener('click',function(e){e.preventDefault();fn()});return b;
  }
  function openMenu(){
    var r=sel()[0];if(!r)return;
    var bb=r.getBoundingClientRect();
    r.dispatchEvent(new MouseEvent('contextmenu',{bubbles:true,cancelable:true,view:window,button:2,clientX:14,clientY:Math.max(70,window.innerHeight*0.16)}));
  }
  function menuAct(h){var a=document.querySelector('#torrentsTableMenu a[href="'+h+'"]');if(a)a.click()}
  function buildPhone(){
    if(document.getElementById('vBar'))return;
    var h=document.documentElement;
    var nav=document.getElementById('desktopNavbar');
    if(nav){var fb=document.createElement('button');fb.id='vFilterBtn';fb.type='button';fb.setAttribute('aria-label','filters');fb.textContent='\u2630';
      fb.addEventListener('click',function(){h.classList.toggle('v-drawer')});nav.insertBefore(fb,nav.firstChild)}
    var sh=document.createElement('div');sh.id='vShade';sh.addEventListener('click',function(){h.classList.remove('v-drawer')});document.body.appendChild(sh);
    var fc=document.getElementById('filtersColumn');
    if(fc)fc.addEventListener('click',function(e){if(isPhone()&&e.target.closest&&e.target.closest('li'))setTimeout(function(){h.classList.remove('v-drawer')},180)});
    var bar=document.createElement('div');bar.id='vBar';
    var cnt=document.createElement('span');cnt.id='vCount';bar.appendChild(cnt);
    bar.appendChild(mkBtn('start','torrent-start.svg',function(){click($('#startButton'))}));
    bar.appendChild(mkBtn('stop','torrent-stop.svg',function(){click($('#stopButton'))}));
    bar.appendChild(mkBtn('recheck','force-recheck.svg',function(){menuAct('#recheck')}));
    bar.appendChild(mkBtn('more','',openMenu));
    bar.appendChild(mkBtn('info','help-about.svg',function(){h.classList.toggle('v-details')}));
    bar.appendChild(mkBtn('delete','list-remove.svg',function(){click($('#deleteButton'))},'dang'));
    document.body.appendChild(bar);
    /* sort control */
    var tb=document.getElementById('mochaToolbar');
    if(tb){
      var box=document.createElement('div');box.id='vSort';
      var s=document.createElement('select');s.setAttribute('aria-label','sort');
      [['added_on','added'],['name','name'],['progress','progress'],['dlspeed','speed'],['size','size'],['eta','eta'],['ratio','ratio']].forEach(function(o){var op=document.createElement('option');op.value=o[0];op.textContent=o[1];s.appendChild(op)});
      var d=document.createElement('button');d.type='button';d.className='btn';d.textContent='\u2195';d.setAttribute('aria-label','reverse');
      s.addEventListener('change',function(){if(window.torrentsTable)torrentsTable.setSortedColumn(s.value,s.value==='name'?'0':'1')});
      d.addEventListener('click',function(){if(window.torrentsTable)torrentsTable.setSortedColumn(torrentsTable.sortedColumn,torrentsTable.reverseSort==='1'?'0':'1')});
      box.appendChild(s);box.appendChild(d);tb.appendChild(box);
    }
    /* tap = toggle selection (multi-select without ctrl); stock code selects on touchstart, so remember the old selection first */
    var tapPrev=null;
    function inList(e){return e.target&&e.target.closest&&e.target.closest('#torrentsTableDiv tbody tr')}
    document.addEventListener('touchstart',function(e){if(isPhone()&&window.torrentsTable&&inList(e))tapPrev=torrentsTable.selectedRows.slice()},{capture:true,passive:true});
    document.addEventListener('click',function(e){
      if(!isPhone()||!e.isTrusted||e.ctrlKey||e.metaKey||e.shiftKey||!window.torrentsTable)return;
      var tr=inList(e);if(!tr)return;
      e.stopImmediatePropagation();e.preventDefault();
      var base=tapPrev||torrentsTable.selectedRows.slice();tapPrev=null;
      var id=tr.rowId,i=base.indexOf(id);if(i>=0)base.splice(i,1);else base.push(id);
      torrentsTable.reselectRows(base);
      try{if(torrentsTable.onSelectedRowChanged)torrentsTable.onSelectedRowChanged()}catch(err){}
      sync();
    },true);
    setInterval(function(){tagRows();sync()},600);tagRows();sync();
  }
  function maybePhone(){if(isPhone())buildPhone()}
  if(mq.addEventListener)mq.addEventListener('change',maybePhone);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',maybePhone);else maybePhone();
  setTimeout(maybePhone,1500);
})();
