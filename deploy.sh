rm -rf ../yuanhengzhao.github.io/*
cp -r ./build/ ../yuanhengzhao.github.io/
cd ../yuanhengzhao.github.io
git add .
git commit -m "Deploy"
git push