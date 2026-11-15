<h1 align="center">Theme qBittorrent | Jellyfin</h1>

[![Jellyfin 12.0+](https://img.shields.io/badge/Jellyfin-12.0%2B-00a4dc?logo=jellyfin&logoColor=white)](https://jellyfin.org)
[![qBittorrent 5.1.4+](https://img.shields.io/badge/qBittorrent-5.1.4%2B-2f67ba?logo=qbittorrent&logoColor=white)](https://www.qbittorrent.org)
[![Support: Claude](https://img.shields.io/badge/Support-Claude-d97757?logo=claude&logoColor=white)](https://claude.ai)

Проект в основном для серверной части: чтобы интерфейс выглядел лучше стандартного.

- Jellyfin точно работает на версии 12.4.
- qBittorrent точно работает на версии 5.1.4.

<h2 align="center">Jellyfin</h2>

Тема точно работает на телефоне и на ПК. На телевизоре пока работает плохо.

- `netflin_jellyfin.css` взят за основу из проекта [Netflin](https://github.com/ahza-code/Netflin) и немного переделан. Это не мой основной стиль.
- `verloren_theme_jellyfin.css` тоже сделан на основе [Netflin](https://github.com/ahza-code/Netflin), но стиль взят из проекта [omaseed](https://github.com/diogochaves/omaseed). Было интересно их совместить, и получилось неплохо.

### Установка

1. Скопируйте содержимое нужного CSS-файла из папки `jellyfin_theme`.
2. Зайдите в панель управления Jellyfin, раздел «Оформление».
3. Вставьте код в поле «Настраиваемый CSS-код» и сохраните.

**Всё готово!**

<h2 align="center">qBittorrent</h2>

Стиль создан с помощью проекта [omaseed](https://github.com/diogochaves/omaseed).

### Установка

1. Создайте в удобном месте папку и запомните путь к ней.
2. Положите в неё все файлы из папки `qbittorrent_theme`.
3. Добавьте эту папку в `volumes` вашего Docker-контейнера qBittorrent. Формат: `путь_на_сервере:путь_в_контейнере:ro`.

   Пример:

   ```yaml
   volumes:
     - /srv/dev-disk-by-uuid-e430d7b8-ab9e-4de3-9b22-95d9a895d5e7/toshiba_1tb/qbittorrent/verloren:/config/verloren:ro
   ```

   Здесь `/srv/.../qbittorrent/verloren` — путь на сервере, а `/config/verloren` — путь внутри контейнера (в qBittorrent появится папка `verloren`).

4. Перезапустите контейнер:

   ```bash
   docker compose up -d
   ```

5. Откройте qBittorrent: Настройки → вкладка **WebUI** → включите **Use alternative WebUI**.
6. В поле пути укажите `/config/verloren`, нажмите **Save** и перезагрузите страницу.

**Всё готово!**

<h2 align="center">PREVIEW</h2>

<details>
  <summary><h3>Jellyfin theme verloren: PC version</h3></summary>
  <p>
  <img src="img/jellyfin_theme_verloren/1_login.png" width="900">
  <img src="img/jellyfin_theme_verloren/2_main_window.png" width="900">
  <img src="img/jellyfin_theme_verloren/3_main_windows_next.png" width="900">
  <img src="img/jellyfin_theme_verloren/4_film_all.png" width="900">
  <img src="img/jellyfin_theme_verloren/5_film_main_window.png" width="900">
  <img src="img/jellyfin_theme_verloren/6_film_main_windows_description.png" width="900">
  <img src="img/jellyfin_theme_verloren/7_music.png" width="900">
  <img src="img/jellyfin_theme_verloren/8_album.png" width="900">
  <img src="img/jellyfin_theme_verloren/9_people.png" width="900">
  <img src="img/jellyfin_theme_verloren/10_player.png" width="900">
  <img src="img/jellyfin_theme_verloren/11_seasion.png" width="900">
  <img src="img/jellyfin_theme_verloren/12_episodes.png" width="900">
  </p>
</details>

<details>
  <summary><h3>Jellyfin theme verloren: Phone version</h3></summary>
  <p>
  <img src="img/jellyfin_theme_verloren/phone/1_main_window.jpeg" width="400">
  <img src="img/jellyfin_theme_verloren/phone/2_main_window_next.jpeg" width="400">
  <img src="img/jellyfin_theme_verloren/phone/3_film_main.jpeg" width="400">
  <img src="img/jellyfin_theme_verloren/phone/4_music_album.jpeg" width="400">
  <img src="img/jellyfin_theme_verloren/phone/5_album.jpeg" width="400">
  <img src="img/jellyfin_theme_verloren/phone/6_player.jpeg" width="400">
  <img src="img/jellyfin_theme_verloren/phone/7_film_main_window.jpeg" width="400">
  <img src="img/jellyfin_theme_verloren/phone/8_people.jpeg" width="400">
  <img src="img/jellyfin_theme_verloren/phone/9_season.jpeg" width="400">
  <img src="img/jellyfin_theme_verloren/phone/10_episodes.jpeg" width="400">
  </p>
</details>

<details>
  <summary><h3>qBittorrent theme</h3></summary>
  <p>
  <img src="img/qbittorrent_theme/image%20copy%202.png" width="900">
  <img src="img/qbittorrent_theme/image%20copy.png" width="900">
  <img src="img/qbittorrent_theme/image.png" width="900">
  </p>
</details>


## Лицензия и авторы

Проект распространяется под лицензией [GPL-2.0](LICENSE). Программное обеспечение предоставляется «как есть», без каких-либо гарантий. Автор не несёт ответственности за любые убытки или проблемы, возникшие при использовании кода.

Использованные проекты:

- [Netflin](https://github.com/ahza-code/Netflin) (GPL-2.0) — основа для `netflin_jellyfin.css` и `verloren_theme_jellyfin.css`
- [omaseed](https://github.com/diogochaves/omaseed) (MIT, Copyright (c) 2026 Diogo Chaves) — источник стиля для темы qBittorrent и Jellyfin verloren
