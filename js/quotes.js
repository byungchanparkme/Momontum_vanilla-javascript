// quotes.js
const quotes = [
    {
      quote: "간단함이 훌륭함의 열쇠다",
      author: "이소룡"
    },
    {
      quote: "승리하면 조금 배울 수 있고, 패배하면 모든 것을 배울 수 있다.",
      author: "크리스티 메튜슨"
    },
    {
      quote: "말만 하고 행동하지 않는 사람은 잡초로 가득 찬 정원과 같다.",
      author: "하우얼"
    },
    {
      quote: "바람이 불지 않으면 노를 저어라.",
      author: "윈스턴 처칠"
    },
    {
      quote: "낭비한 시간에 대한 후회는 더 큰 시간 낭비이다.",
      author: "메이슨 쿨리"
    },
    {
      quote: "산을 움직이려 하는 이는 작은 돌을 들어내는 일로 시작한다.",
      author: "공자"
    },
    {
      quote: "들은 것은 잊어버리고, 본 것은 기억하고 직접 해본 것은 이해한다.",
      author: "공자"
    },
    {
      quote: "아이디어의 좋고 나쁨은 어떻게 실행하느냐에 따라 결정된다.",
      author: "카를로스 곤"
    },
    {
      quote: "인생은 원래 공평하지 못하다. 그런 현실에 대하여 불평할 생각하지 말고 받아들여라.",
      author: "빌 게이츠"
    },
    {
      quote: "다리를 움직이지 않고는 작은 도랑도 건널 수 없다",
      author: "알랭"
    },
    {
      quote: "휴식은 게으름도, 멈춤도 아니다.",
      author: "헨리 포드"
    },
    {
      quote: "위대한 정신을 가진 사람들은 생각을 논한다. 평범한 사람들은 사건을 논한다. 마음이 좁은 사람들은 사람들을 논한다.",
      author: "엘리너 루즈벨트"
    },
    {
      quote: "당신이 허락해주지 않으면 아무도 당신이 열등감을 느끼게 만들 수 없다.",
      author: "엘리너 루즈벨트"
    },
    {
      quote: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.",
      author: "윈스턴 처칠"
    },
    {
      quote: "나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다.",
      author: "토마스 제퍼슨"
    },
    {
      quote: "미래는 현재 우리가 무엇을 하는가에 달려 있다.",
      author: "마하트마 간디"
    },
    {
      quote: "미래를 예측하는 최선의 방법은 미래를 창조하는 것이다.",
      author: "앨런 케이"
    },
    {
      quote: "어제로 돌아갈 수 없다, 왜냐하면 나는 어제와는 다른 사람이 되었기 때문이다.",
      author: "루이스 캐럴"
    },
    {
      quote: "기운과 끈기는 모든 것을 이겨낸다.",
      author: "벤자민 프랭클린"
    },
    {
      quote: "해야 할 일은 과감히 하라, 결심한 일은 반드시 실행하라.",
      author: "벤자민 프랭클린"
    },
    {
      quote: "꿈은 날짜와 함께 적어 놓으면 목표가 되고, 목표를 잘게 나누면 계획이 되며, 계획을 실행에 옮기면 꿈에 실현되는 것이다.",
      author: "그렉 S 리드"
    },
    {
      quote: "자기 신뢰는 성공의 첫번째 비결이다.",
      author: "랄프 왈도 에머슨"
    },
    {
      quote: "우리가 실패에서 배우면, 실패는 성공이 된다.",
      author: "말콤 포브스"
    },
    {
      quote: "모든 스트라이크는 나의 다음 홈런을 더욱 가까이 오게 한다.",
      author: "베이브 루스"
    },
    {
      quote: "당신이 할 수 있다고 생각하든, 그렇지 않다고 생각하든 당신 말이 맞습니다.",
      author: "헨리 포드"
    },
    {
      quote: "최대한의 삶을 살고, 최대한 긍정적인 것에 집중하자.",
      author: "매트 카메론"
    },
    {
      quote: "20년 후, 당신은 했던 일보다 하지 않았던 일로 인해 더 실망을 할 것이다.",
      author: "마크 트웨인"
    },
    {
      quote: "일은 당신 인생의 많은 부분을 채울 것이다. 그래서 진정 만족을 얻으려면 당신이 생각하기에 위대한 일을 해야 한다. 위대한 일을 하는 유일한 방법은 당신이 이 일을 진짜 사랑하는 것이다. 아직 찾지 못했다면 계속해서 찾아라. 타협하지 마라. 모든 일이 그렇듯 제대로 찾았다면 당신 마음이 알게 될 것이다.",
      author: "스티브 잡스"
    },
    {
      quote: "현재와 미래는 어떻게든 연결되어 있다.",
      author: "스티브 잡스"
    },
    {
      quote: "최선을 다하고 있다고 말해봤자 소용없다. 필요한 일을 함에 있어서는 반드시 성공해야 한다.",
      author: "윈스턴 처칠"
    }
  ];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

// randomness
const quoteLen = quotes.length;
const todaysQuote = quotes[Math.floor(Math.random() * quoteLen)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;
