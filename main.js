// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// console.log(returnRandBase())
// console.log(mockUpStrand())

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      let randIndex = [Math.floor(Math.random() * 15)];
      console.log(`randomIndex: ${randIndex}`);
      let newBase;
      do {
        newBase = returnRandBase();
      } while (newBase == this.dna[randIndex]);
      console.log(`newBase: ${newBase}`);
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA(pAequor) {
      console.log(`pAequor: ${pAequor}`);
      let sameDnaCount = 0;
      for (let i = 0; this.dna.length > i; i++) {
        if (this.dna[i] == pAequor.dna[i]) {
          sameDnaCount++;
        }
      }
      return `${Math.round((sameDnaCount / this.dna.length) * 100)}%`;
    },
    willLikelySurvive() {
      let cGDnaCount = 0;
      for (let i = 0; this.dna.length > i; i++) {
        if (this.dna[i] == "C" || this.dna[i] == "G") {
          cGDnaCount++;
        }
      }
      return (cGDnaCount / this.dna.length) * 100 > 60;
    },
  };
};

// let test = mockUpStrand();
// let test2 = mockUpStrand();
// console.log(test);

// let newSpecimen = pAequorFactory( 1, test);
// let specimen2 = pAequorFactory (2,test2)
// console.log(newSpecimen.mutate());

// console.log(test2);
// console.log(newSpecimen.compareDNA(specimen2));
// console.log(newSpecimen.willLikelySurvive());

const thirtySpecimen = [];
let tempAquor;
for (let i = 30; i > 0; i--) {
  do {
    tempAquor = pAequorFactory(i, mockUpStrand());
  } while (!tempAquor.willLikelySurvive());
  thirtySpecimen.push(tempAquor.dna);
}

console.log(thirtySpecimen);
