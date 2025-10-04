#!/bin/bash
cd ./server || exit 1

# Nom de la session tmux
SESSION_NAME="mc"

# Vérifie si une session du même nom existe déjà
if tmux has-session -t "$SESSION_NAME" 2>/dev/null; then
  echo "➡️  Session tmux '$SESSION_NAME' déjà en cours. Connexion..."
else
  echo "🚀 Démarrage du serveur Minecraft dans une nouvelle session tmux..."
  tmux new-session -d -s "$SESSION_NAME" "bash ./run.sh nogui"
fi

# Attache-toi à la session
tmux attach -t "$SESSION_NAME"