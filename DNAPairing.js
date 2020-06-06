function pairElement(str) {

const paired = [];

for (let i = 0; i < str.length; i++) {
  const letter = str[i];

  if(letter === "G"){
    paired.push(["G","C"]);
  }
  else if(letter === "C"){
    paired.push(["C","G"]);
  }
  else if (letter === "A"){
    paired.push(["A","T"]);
  }
  else if (letter === "T"){
    paired.push(["T","A"]);
  }
}

  return paired;
}

pairElement("GCG");
