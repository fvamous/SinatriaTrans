#!/bin/bash

# SUPER TURBO PLUS 2.1 - AUTO SAFE DEPLOY
# Fitur:
# - Backup repo & file sensitif
# - Otomatis deteksi branch default & remote
# - Push ke GitHub hanya jika ada commit
# - Deploy ke Vercel (subfolder bisa ditentukan)
# - Log lengkap

set -e

REPO_DIR="$(pwd)"
BACKUP_DIR="${REPO_DIR}-backup-$(date +%Y%m%d%H%M%S)"
SECRETS_DIR="${REPO_DIR}-secrets-$(date +%Y%m%d%H%M%S)"
VERCEL_PROJECT_SUBFOLDER="."  # ubah kalau mau deploy subfolder
REMOTE_NAME="origin"

echo "🚀 SUPER TURBO PLUS 2.1 DEPLOY START"
echo "📂 Repo: $REPO_DIR"
echo "======================================"

# 1. Backup repo lokal
echo "📦 Backup repo lokal ke $BACKUP_DIR"
git clone --bare "$REPO_DIR" "$BACKUP_DIR"
echo "✅ Backup selesai"

# 2. Backup file sensitif
echo "🔐 Backup file sensitif ke $SECRETS_DIR"
mkdir -p "$SECRETS_DIR"
SENSITIVE_FILES=$(find . -maxdepth 1 -type f -name ".env*" -o -name "secrets.json")
if [ -z "$SENSITIVE_FILES" ]; then
  echo "⚠️ Tidak ada file sensitif ditemukan"
else
  for f in $SENSITIVE_FILES; do
    cp "$f" "$SECRETS_DIR/"
    echo "$f -> $SECRETS_DIR/$(basename $f)"
  done
fi
echo "✅ Backup file sensitif selesai"

# 3. Deteksi branch default & remote
DEFAULT_BRANCH=$(git symbolic-ref refs/remotes/$REMOTE_NAME/HEAD 2>/dev/null | sed 's@^refs/remotes/origin/@@')
if [ -z "$DEFAULT_BRANCH" ]; then
  DEFAULT_BRANCH="main"
fi
echo "📌 Branch default: $DEFAULT_BRANCH"

REMOTE_URL=$(git remote get-url $REMOTE_NAME 2>/dev/null || echo "")
if [ -z "$REMOTE_URL" ]; then
  git remote add $REMOTE_NAME "git@github.com:fvamous/$(basename $REPO_DIR).git"
  echo "⚠️ Remote 'origin' tidak ada. Ditambahkan otomatis."
fi

# 4. Hapus file sensitif dari history
if [ ! -z "$SENSITIVE_FILES" ]; then
  echo "🧹 Membersihkan file secret dari history..."
  for f in $SENSITIVE_FILES; do
    git filter-branch --force --index-filter "git rm -r --cached --ignore-unmatch $f" --prune-empty --tag-name-filter cat -- --all
  done
  echo "✅ File sensitif dihapus dari history"
fi

# 5. Push ke GitHub
echo "📤 Push paksa ke GitHub"
if git show-ref --verify --quiet refs/heads/$DEFAULT_BRANCH; then
  git push $REMOTE_NAME $DEFAULT_BRANCH --force
  echo "✅ Push selesai"
else
  echo "⚠️ Tidak ada commit di branch $DEFAULT_BRANCH. Push dilewati."
fi

# 6. Deploy ke Vercel
echo "📦 Deploy ke Vercel folder: $VERCEL_PROJECT_SUBFOLDER"
vercel --prod "$VERCEL_PROJECT_SUBFOLDER"
echo "✅ Vercel deploy selesai"

echo "🎉 SUPER TURBO PLUS 2.1 DEPLOY SELESAI!"
