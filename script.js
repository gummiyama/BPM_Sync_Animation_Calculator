function calculate() {
    const bpm = parseFloat(document.getElementById("bpm").value);
    const frameRate = parseFloat(document.getElementById("frameRate").value);
    const numberOfImages = parseFloat(document.getElementById("numberOfImages").value);
    const framesPerImage = parseFloat(document.getElementById("framesPerImage").value);

    // θ (beta + 1) と δ (beta - 1) の計算
    const theta = framesPerImage + 1;
    const delta = framesPerImage - 1;

    // 大ループのフレーム数
    const framesPerLoop = (60 / bpm) * frameRate * numberOfImages;

    // 小さいループの計算（θとδを使用した場合）
    const smallLoopFramesTheta = numberOfImages * (framesPerImage + theta);
    const smallLoopFramesDelta = numberOfImages * (framesPerImage + delta);
    const maxOccurrencesTheta = Math.floor(framesPerLoop / smallLoopFramesTheta);
    const maxOccurrencesDelta = Math.floor(framesPerLoop / smallLoopFramesDelta);
    const remainderTheta = framesPerLoop % smallLoopFramesTheta;
    const remainderDelta = framesPerLoop % smallLoopFramesDelta;

    // 結果の表示
    document.getElementById("results").innerHTML = 
        `<strong>Results with θ (β+1):</strong><br>
         Total Frames in Large Loop: ${framesPerLoop}<br>
         Number of Small Loops in Large Loop: ${maxOccurrencesTheta}<br>
         Frames in One Small Loop: ${smallLoopFramesTheta}<br>
         Occurrences of θ in One Small Loop: ${theta}<br>
         Remainder Frames: ${remainderTheta}<br><br>

         <strong>Results with δ (β-1):</strong><br>
         Total Frames in Large Loop: ${framesPerLoop}<br>
         Number of Small Loops in Large Loop: ${maxOccurrencesDelta}<br>
         Frames in One Small Loop: ${smallLoopFramesDelta}<br>
         Occurrences of δ in One Small Loop: ${delta}<br>
         Remainder Frames: ${remainderDelta}`;
}

// 初期計算
calculate();
