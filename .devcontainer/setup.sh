#!/bin/bash

# 安全第一！スクリプトが途中で失敗したら止まるように
set -e

echo "📦 APTの更新と基本ツールのインストール..."
sudo apt-get update && sudo apt-get upgrade -y
# sudo apt-get install -y

echo "🧰 npmを最新版にアップデート中..."
npm install -g npm@latest

# echo "📦 よく使うnpm系CLIも一緒に入れちゃう？（任意）"
# npm install -g yarn pnpm

echo "🛠️ 所有権を調整中..."
sudo chown -R node:node /workspaces/portfolio/code/.nuxt
sudo chown -R node:node /workspaces/portfolio/code/node_modules

echo "✨ 完了！環境構築が終わりました！"
