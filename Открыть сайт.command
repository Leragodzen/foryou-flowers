#!/bin/bash
# Двойной клик — сайт откроется в браузере со всеми фотографиями.
# Пока это окно открыто, сайт работает. Закрыть окно — сайт выключится.

cd "$(dirname "$0")" || exit 1

PORT=8910
while lsof -i :$PORT >/dev/null 2>&1; do
  PORT=$((PORT + 1))
done

echo ""
echo "  FOR YOU — сайт запущен"
echo "  Адрес: http://localhost:$PORT"
echo ""
echo "  Не закрывайте это окно, пока смотрите сайт."
echo "  Чтобы выключить — просто закройте окно."
echo ""

sleep 1 && open "http://localhost:$PORT/index.html" &

python3 -m http.server $PORT
