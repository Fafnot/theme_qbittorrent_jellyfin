<h1 align="center">Theme qBittorrent | Jellyfin</h1>

[![Jellyfin 12.0+](https://img.shields.io/badge/Jellyfin-12.0%2B-00a4dc?logo=jellyfin&logoColor=white)](https://jellyfin.org)
[![qBittorrent 5.1.4+](https://img.shields.io/badge/qBittorrent-5.1.4%2B-2f67ba?logo=qbittorrent&logoColor=white)](https://www.qbittorrent.org)
[![Support: Claude](https://img.shields.io/badge/Support-Claude-d97757?logo=claude&logoColor=white)](https://claude.ai)

<h3>Проект больше для сервероной части что бы интерфейс выгледил лучшее дефолтного,
jellyfin точно будет работать на версий 12.4,
qbittorrent будет работать точно на версий 5.1.4</h3>

<h2 align="center">Jellyfin объяснение</h2>
<h3>netflin_jellyfin.css взято за основу с этого проекта https://github.com/ahza-code/Netflin и немного переделан он не основной стиль</h3>
<h3>verloren_theme_jellyfin.css взят за основу тоже проект https://github.com/ahza-code/Netflin но уже стиль был как в этом проекте https://github.com/diogochaves/omaseed очень было интересно их совместит вышло не плохо</h3>

<h3>Что бы в jellyfin пременить мой стили надо просто скопировать что в css файлах в папке jellyfin_theme дальше надо зайти в панель управление есть оформление и туда просто вставляем мой css код в Настраиваемый CSS-код все готово </h3>

<h2 align="center"> qBittorrent объяснение</h2>
<h3>Стиль для проекта подобрать помог другой проект https://github.com/diogochaves/omaseed и было создано</h3>
<h3>Что бы использовать его надо создать папку где вам удобно запомнить путь в эту папку закинуть все файлы с папки qbittorrent_theme после зайти на свой docker контейнер и в volume добавит путь</h3>
<h3>Пример вот - /srv/dev-disk-by-uuid-e430d7b8-ab9e-4de3-9b22-95d9a895d5e7/toshiba_1tb/jellyfin/verloren:/config/verloren:ro мой путь тут /srv/dev-disk-by-uuid-e430d7b8-ab9e-4de3-9b22-95d9a895d5e7/toshiba_1tb/jellyfin/verloren и после него надо будет добавить всего :config/verloren:ro что бы в qbittorrent патом появился папка verloren </h3>
<h3>После этого надо перезапустить контейнер docker compose up -d и после зайти на qbittorrent</h3>
<h3>Настройки после в окне WebUI есть поле use alternative webui включаем патом просто вводим туда папку /verloren нажымаем save и все перезагружаем страницу</h3>
<h3>ВСЕ ГОТОВО</h3>

<h2 align="center">PREVIEW</h2>
<details>
  <summary><h3>theme verloren jellyfin PC version</h3></summary>
  <p>
  <img src="img/jellyfin_theme_verloren/1_login.png" style="width: 900px">
  <img src="img/jellyfin_theme_verloren/2_main_window.png" style="width: 900px">
  <img src="img/jellyfin_theme_verloren/3_main_windows_next.png" style="width: 900px">
  <img src="img/jellyfin_theme_verloren/4_film_all.png" style="width: 900px">
  <img src="img/jellyfin_theme_verloren/5_film_main_window.png" style="width: 900px"> 
  <img src="img/jellyfin_theme_verloren/6_film_main_windows_description.png" style="width: 900px">
  <img src="img/jellyfin_theme_verloren/7_music.png" style="width: 900px">
  <img src="img/jellyfin_theme_verloren/8_album.png" style="width: 900px">
  <img src="img/jellyfin_theme_verloren/9_people.png" style="width: 900px">
  <img src="img/jellyfin_theme_verloren/10_player.png" style="width: 900px">
  <img src="img/jellyfin_theme_verloren/11_seasion.png" style="width: 900px">
  <img src="img/jellyfin_theme_verloren/12_episodes.png" style="width: 900px">
  </p>
  <details>
  <summary><h3>Phone version</h3></summary>
  <p>
  <img src="img/jellyfin_theme_verloren/phone/1_main_window.jpeg" style="width: 400px">
  <img src="img/jellyfin_theme_verloren/phone/2_main_window_next.jpeg" style="width: 400px">
  <img src="img/jellyfin_theme_verloren/phone/3_film_main.jpeg" style="width: 400px">
  <img src="img/jellyfin_theme_verloren/phone/4_music_album.jpeg" style="width: 400px">
  <img src="img/jellyfin_theme_verloren/phone/5_album.jpeg" style="width: 400px">
  <img src="img/jellyfin_theme_verloren/phone/6_player.jpeg" style="width: 400px">
  <img src="img/jellyfin_theme_verloren/phone/7_film_main_window.jpeg" style="width: 400px">
  <img src="img/jellyfin_theme_verloren/phone/8_people.jpeg" style="width: 400px">
  <img src="img/jellyfin_theme_verloren/phone/9_season.jpeg" style="width: 400px">
  <img src="img/jellyfin_theme_verloren/phone/10_episodes.jpeg" style="width: 400px">
  </p>
</details>
</details>

  <details>
  <summary><h3>qbittorrent theme</h3></summary>
  <p>
  <img src="img/qbittorrent_theme/image copy 2.png" style="width: 900px">
  <img src="img/qbittorrent_theme/image copy.png" style="width: 900px">
  <img src="img/qbittorrent_theme/image.png" style="width: 900px">
  </p>
</details>


