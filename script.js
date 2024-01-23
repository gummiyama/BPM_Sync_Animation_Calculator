{\rtf1\ansi\ansicpg932\cocoartf2758
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function calculate() \{\
    const bpm = document.getElementById("bpm").value;\
    const frameRate = document.getElementById("frameRate").value;\
    const numberOfImages = document.getElementById("numberOfImages").value;\
    const framesPerImage = document.getElementById("framesPerImage").value;\
\
    // \uc0\u12371 \u12371 \u12395 \u35336 \u31639 \u12525 \u12472 \u12483 \u12463 \u12434 \u23455 \u35013 \
    const framesPerLoop = (60 / bpm) * frameRate * numberOfImages;\
    const maxOccurrences = Math.floor(framesPerLoop / (numberOfImages * framesPerImage));\
    const remainder = framesPerLoop % (numberOfImages * framesPerImage);\
\
    // \uc0\u32080 \u26524 \u12398 \u34920 \u31034 \
    document.getElementById("results").innerHTML = \
        `Frames Per Loop (\uc0\u945 ): $\{framesPerLoop\}<br>\
         Max Occurrences of Small Loop (N): $\{maxOccurrences\}<br>\
         Remainder: $\{remainder\}`;\
\}\
\
// \uc0\u21021 \u26399 \u35336 \u31639 \
calculate();\
}