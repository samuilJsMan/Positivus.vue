echo "run build"
npm run build
echo "add ."
git add .
echo "commit"
git commit -m "autoComit"
echo "push"
git push
echo "deploy"
firebase deploy
