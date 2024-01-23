function calculate() {
    const bpm = document.getElementById("bpm").value;
    const frameRate = document.getElementById("frameRate").value;
    const numberOfImages = document.getElementById("numberOfImages").value;
    const framesPerImage = document.getElementById("framesPerImage").value;

    // ここに計算ロジックを実装
    const framesPerLoop = (60 / bpm) * frameRate * numberOfImages;
    const maxOccurrences = Math.floor(framesPerLoop / (numberOfImages * framesPerImage));
    const remainder = framesPerLoop % (numberOfImages * framesPerImage);

    // 結果の表示
    document.getElementById("results").innerHTML = 
        `Frames Per Loop (α): ${framesPerLoop}<br>
         Max Occurrences of Small Loop (N): ${maxOccurrences}<br>
         Remainder: ${remainder}`;
}

// 初期計算
calculate();
