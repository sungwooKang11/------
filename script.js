const questions = [
  // {
  //   Q: "1. 단어부터 시작.",
  //   A: "단어 8개, 구 8개, 절 3개, 문장(문법), 문단(리딩), 글(라이팅)",
  // },
  // {
  //   Q: "1.1. 단어와 구 차이?",
  //   A: "개수 차이, 구는 단어 2개 이상",
  // },
  // {
  //   Q: "1.1.1. 부사 vs. 부사구",
  //   A: "부사 very 부사구 very quickly",
  // },
  // {
  //   Q: "1.1.2. 동사 vs. 동사구 ",
  //   A: "동사 pull 동사구 pull over",
  // },
  // {
  //   Q: "1.1.3. 전치사 vs. 전치사구",
  //   A: "전치사 on 전치사구 on top of",
  // },
  // {
  //   Q: "1.1.4. 접속사 vs. 접속사구 ",
  //   A: "접속사 although 접속사구 even though",
  // },
  // {
  //   Q: "1.2. 구와 절 차이?",
  //   A: "주어, 동사의 유무, 절에는 주어, 동사가 있다.",
  // },
  // {
  //   Q: "1.3. 절과 문장 차이?",
  //   A: "절마커의 유무, 문장에는 절마커가 없다.",
  // },
  // {
  //   Q: "1.4. 절마커란? ",
  //   A: "종속 접속사",
  // },
  // {
  //   Q: "1.5. 절과 문장 공통점? ",
  //   A: "주어, 동사",
  // },
  // {
  //   Q: "1.6. 절의 종류 3가지?",
  //   A: "명사절, 형용사절, 부사절",
  // },
  // {
  //   Q: "2. 문장 시작",
  //   A: "",
  // },
  // {
  //   Q: "2.1. 문장 요건 3가지?",
  //   A: "1. 주어, 2. 동사, 3. 절마커가 없어야 한다.",
  // },
  // {
  //   Q: "2.1.1. 절마커란? ",
  //   A: "종속 접속사",
  // },
  // {
  //   Q: "2.1.2 절마커 ",
  //   A: "because, if, that, 등등",
  // },
  {
    Q: "2.2. 문장의 종류?",
    A: "단문(simple): S+V,  중문(compound): S+V 등위 S+V,  복문(complex): S+V 종속 S+V (절마커 포함), \n\ 혼합문(compound + complex): S+V 등위 S+V 종속 S+V",
  },
  // {
  //   Q: "2.2.1. 중문과 복문 차이?",
  //   A: "접속사 종류 차이",
  // },
  // {
  //   Q: "2.2.2. 접속사 종류 차이? ",
  //   A: "등위, 종속",
  // },
  // {
  //   Q: "2.2.3. 등위접속사 종류 시작",
  //   A: "FANBOYS => For=because, And, Nor=and not, But, Or, Yet=but, So",
  // },
]; 
  
  const Q = document.querySelector(".q");
  const A = document.querySelector(".a");
  const ramdomQ = questions[Math.floor(Math.random() * questions.length)];

  Q.innerText = ramdomQ.Q;
  A.innerText = ramdomQ.A;
