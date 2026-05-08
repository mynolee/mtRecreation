const p = (name, title = name, lang = 'ko', region = 'korean') => ({
  name,
  title,
  lang,
  region,
});

const imageOverrides = {
  싸이: commonsFile('Psy 2, 2013.jpg'),
  박나래: commonsFile('Park Na-rae in December 2024.png'),
  신동엽: commonsFile(
    '20190501 Shin Dong-yup 신동엽 Baeksang Arts Awards (1).jpg',
  ),
  이순신: commonsFile('전 이순신 초상 (cropped).jpg'),
  한효주: commonsFile('Han Hyo-joo in July 2024.jpg'),
  권유리: commonsFile('Kwon Yu-ri at Incheon Airport on August 5, 2023.jpg'),
  한지민: commonsFile('20230810 Han Jimin 한지민 07.jpg'),
  선미: commonsFile('Lee Sunmi 이선미 2024 02.jpg'),
  조국: commonsFile("Cho Kuk's Portrait (2024.12).jpg"),
  이성민: commonsFile('200108 이성민.jpg'),
  '써니(이순규)': commonsFile('Sunny SNSD 2022.jpg'),
};

const textCroppedPeople = new Set([]);

function commonsFile(fileName) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=1000`;
}

const famousPeople = [
  p('손흥민'),
  p('김연아'),
  p('아이유'),
  p('유재석'),
  p('강호동'),
  p('백종원'),
  p('봉준호'),
  p('이정재'),
  p('마동석'),
  p('페이커'),
  p('박지성'),
  p('류현진'),
  p('김연경'),
  p('임영웅'),
  p('장원영'),
  p('지드래곤', 'G-DRAGON'),
  p('태양(동영배)', '태양 (가수)'),
  p('제니', '제니 (가수)'),
  p('리사', '리사 (태국의 가수)', 'ko', 'foreign'),
  p('로제', '로제 (가수)'),
  p('지수', '지수 (가수)'),
  p('RM', 'RM (래퍼)'),
  p('진', '진 (가수)'),
  p('슈가', '슈가 (래퍼)'),
  p('제이홉'),
  p('지민', '지민 (가수)'),
  p('뷔'),
  p('정국'),
  p('차은우'),
  p('박보검'),
  p('송중기'),
  p('현빈'),
  p('손예진'),
  p('전지현'),
  p('김혜수'),
  p('김태리'),
  p('한소희'),
  p('송혜교'),
  p('공유'),
  p('이병헌'),
  p('황정민'),
  p('최민식'),
  p('송강호'),
  p('정우성'),
  p('유해진'),
  p('김고은'),
  p('수지', '수지 (1994년)'),
  p('이효리'),
  p('보아'),
  p('태연'),
  p('카리나', '카리나 (가수)'),
  p('윈터', '윈터 (가수)'),
  p('안유진'),
  p('세종대왕'),
  p('이순신'),
  p('신사임당'),
  p('유관순'),
  p('안중근'),
  p('싸이'),
  p('박찬호'),
  p('안정환'),
  p('이강인'),
  p('황희찬'),
  p('김민재'),
  p('기성용'),
  p('차범근'),
  p('추신수'),
  p('박세리'),
  p('이상화'),
  p('심석희'),
  p('윤성빈'),
  p('장미란'),
  p('박태환'),
  p('서장훈'),
  p('허재'),
  p('이대호'),
  p('손연재'),
  p('박진영'),
  p('양현석'),
  p('신동엽'),
  p('김구라'),
  p('전현무'),
  p('이경규'),
  p('박명수'),
  p('정형돈'),
  p('노홍철'),
  p('하하'),
  p('김종국'),
  p('이광수', '이광수 (배우)'),
  p('송지효'),
  p('조세호'),
  p('양세찬'),
  p('유병재'),
  p('장도연'),
  p('박나래'),
  p('이영자'),
  p('홍진경'),
  p('백지영'),
  p('성시경'),
  p('이문세'),
  p('김대중'),
  p('노무현'),
  p('문재인'),
  p('윤석열'),
  p('박근혜'),
  p('이명박'),
  p('김영삼'),
  p('전두환'),
  p('노태우'),
  p('반기문'),
  p('한덕수'),
  p('오세훈'),
  p('이재명'),
  p('안철수'),
  p('홍준표'),
  p('유승민'),
  p('이준석'),
  p('심상정'),
  p('한동훈'),
  p('조국'),
  p('정몽준'),
  p('정주영'),
  p('이건희'),
  p('이재용'),
  p('정용진'),
  p('구광모'),
  p('정의선'),
  p('방시혁'),
  p('민희진'),
  p('김범수(기업인)', '김범수 (기업인)'),
  p('이수만'),
  p('나영석'),
  p('김은숙'),
  p('박지은'),
  p('김은희'),
  p('허영만'),
  p('김수현(작가)', '김수현 (작가)'),
  p('조용필'),
  p('나훈아'),
  p('송대관'),
  p('태진아'),
  p('설운도'),
  p('장윤정'),
  p('홍진영'),
  p('송가인'),
  p('영탁'),
  p('이찬원'),
  p('김호중'),
  p('전유진'),
  p('김완선'),
  p('엄정화'),
  p('이승철'),
  p('김건모'),
  p('신승훈'),
  p('윤종신'),
  p('김범수 (가수)', '김범수 (가수)'),
  p('박효신'),
  p('나얼'),
  p('이승기'),
  p('정은지'),
  p('윤하'),
  p('선미'),
  p('청하'),
  p('현아'),
  p('효린'),
  p('화사'),
  p('솔라'),
  p('문별'),
  p('슬기'),
  p('아이린', '아이린 (가수)'),
  p('조이(박수영)', '조이 (가수)'),
  p('예리', '예리 (가수)'),
  p('사나', '사나 (가수)', 'ko', 'foreign'),
  p('모모', '모모 (가수)', 'ko', 'foreign'),
  p('나연'),
  p('정연'),
  p('지효'),
  p('다현'),
  p('채영'),
  p('쯔위', '쯔위', 'ko', 'foreign'),
  p('미연'),
  p('우기', '우기 (가수)', 'ko', 'foreign'),
  p('슈화', '슈화', 'ko', 'foreign'),
  p('윤아', '윤아'),
  p('서현', '서현 (가수)'),
  p('권유리', '유리 (1989년)'),
  p('수영(최수영)', '수영 (가수)'),
  p('티파니', '티파니 영', 'ko', 'foreign'),
  p('써니(이순규)', '써니 (가수)'),
  p('효연', '효연'),
  p('정용화'),
  p('이홍기'),
  p('규현'),
  p('희철'),
  p('신동(SUPER JUNIOR)', '신동 (가수)'),
  p('은혁'),
  p('동해'),
  p('시원'),
  p('려욱'),
  p('키(SHINee)', '키 (가수)'),
  p('민호(SHINee)', '민호 (1991년)'),
  p('온유(SHINee)', '온유'),
  p('태민(SHINee)', '태민'),
  p('디오(EXO)', '디오 (가수)'),
  p('카이(EXO)', '카이 (1994년)'),
  p('백현(EXO)', '백현'),
  p('찬열(EXO)', '찬열'),
  p('수호(EXO)', '수호 (가수)'),
  p('세훈(EXO)', '세훈'),
  p('문가영'),
  p('박은빈'),
  p('김지원'),
  p('서현진'),
  p('신민아'),
  p('공효진'),
  p('김하늘'),
  p('하지원'),
  p('김희선'),
  p('고현정'),
  p('김남주'),
  p('염정아'),
  p('라미란'),
  p('김선아'),
  p('김소현'),
  p('김유정'),
  p('박신혜'),
  p('문채원'),
  p('한지민'),
  p('한효주'),
  p('정해인'),
  p('남주혁'),
  p('이민호'),
  p('김수현 (배우)', '김수현 (배우)'),
  p('주지훈'),
  p('지창욱'),
  p('이종석'),
  p('서강준'),
  p('박서준'),
  p('강하늘'),
  p('여진구'),
  p('유아인'),
  p('류준열'),
  p('변우석'),
  p('김우빈'),
  p('도경수'),
  p('임시완'),
  p('옥택연'),
  p('이준호'),
  p('김남길'),
  p('조정석'),
  p('조인성'),
  p('차승원'),
  p('장동건'),
  p('원빈'),
  p('권상우'),
  p('소지섭'),
  p('이서진'),
  p('김희철'),
  p('이동욱'),
  p('서인국'),
  p('유연석'),
  p('마동석'),
  p('류승룡'),
  p('오달수'),
  p('김윤석'),
  p('하정우'),
  p('강동원'),
  p('고수'),
  p('박해일'),
  p('임권택'),
  p('홍상수'),
  p('김기덕'),
  p('윤여정'),
  p('박소담'),
  p('정호연'),
  p('위하준'),
  p('허성태'),
  p('오영수'),
  p('김민하'),
  p('최수종'),
  p('최불암'),
  p('나문희'),
  p('김영옥'),
  p('이순재'),
  p('신구'),
  p('김용건'),
  p('백일섭'),
  p('유동근'),
  p('전광렬'),
  p('이덕화'),
  p('박근형'),
  p('김응수'),
  p('조진웅'),
  p('이성민'),
  p('김성주(방송인)', '김성주 (방송인)'),
  p('배성재'),
  p('김제동'),
  p('이수근'),
  p('은지원'),
  p('김희철'),
  p('탁재훈'),
  p('김준호'),
  p('김대희'),
  p('신봉선'),
  p('김신영'),
  p('홍현희'),
  p('문세윤'),
  p('김숙'),
  p('송은이'),
  p('지석진'),
  p('양세형'),
  p('정준하'),
  p('길(리쌍)', '길 (가수)'),
  p('허경환'),
  p('김영철'),
  p('샘 해밍턴', '샘 해밍턴', 'ko', 'foreign'),
  p('알베르토 몬디', '알베르토 몬디', 'ko', 'foreign'),
  p('타일러 라쉬', '타일러 라쉬', 'ko', 'foreign'),
  p('이세돌'),
  p('조훈현'),
  p('김택용'),
  p('홍진호'),
  p('기욤 패트리', '기욤 패트리', 'ko', 'foreign'),
  p('장재호'),
  p('문호준'),
  p('쯔양'),
  p('침착맨'),
  p('풍월량'),
  p('버락 오바마', 'Barack Obama', 'en', 'foreign'),
  p('도널드 트럼프', 'Donald Trump', 'en', 'foreign'),
  p('조 바이든', 'Joe Biden', 'en', 'foreign'),
  p('일론 머스크', 'Elon Musk', 'en', 'foreign'),
  p('빌 게이츠', 'Bill Gates', 'en', 'foreign'),
  p('스티브 잡스', 'Steve Jobs', 'en', 'foreign'),
  p('마크 저커버그', 'Mark Zuckerberg', 'en', 'foreign'),
  p('제프 베이조스', 'Jeff Bezos', 'en', 'foreign'),
  p('팀 쿡', 'Tim Cook', 'en', 'foreign'),
  p('워런 버핏', 'Warren Buffett', 'en', 'foreign'),
  p('테일러 스위프트', 'Taylor Swift', 'en', 'foreign'),
  p('비욘세', 'Beyoncé', 'en', 'foreign'),
  p('리한나', 'Rihanna', 'en', 'foreign'),
  p('레이디 가가', 'Lady Gaga', 'en', 'foreign'),
  p('아리아나 그란데', 'Ariana Grande', 'en', 'foreign'),
  p('빌리 아일리시', 'Billie Eilish', 'en', 'foreign'),
  p('저스틴 비버', 'Justin Bieber', 'en', 'foreign'),
  p('에드 시런', 'Ed Sheeran', 'en', 'foreign'),
  p('브루노 마스', 'Bruno Mars', 'en', 'foreign'),
  p('마이클 잭슨', 'Michael Jackson', 'en', 'foreign'),
  p('마돈나', 'Madonna', 'en', 'foreign'),
  p('엘비스 프레슬리', 'Elvis Presley', 'en', 'foreign'),
  p('위켄드', 'The Weeknd', 'en', 'foreign'),
  p('아델', 'Adele', 'en', 'foreign'),
  p('에미넴', 'Eminem', 'en', 'foreign'),
  p('드레이크', 'Drake (musician)', 'en', 'foreign'),
  p('스눕 독', 'Snoop Dogg', 'en', 'foreign'),
  p('카니예 웨스트', 'Kanye West', 'en', 'foreign'),
  p('리오넬 메시', 'Lionel Messi', 'en', 'foreign'),
  p('크리스티아누 호날두', 'Cristiano Ronaldo', 'en', 'foreign'),
  p('네이마르', 'Neymar', 'en', 'foreign'),
  p('킬리안 음바페', 'Kylian Mbappé', 'en', 'foreign'),
  p('엘링 홀란', 'Erling Haaland', 'en', 'foreign'),
  p('데이비드 베컴', 'David Beckham', 'en', 'foreign'),
  p('마이클 조던', 'Michael Jordan', 'en', 'foreign'),
  p('르브론 제임스', 'LeBron James', 'en', 'foreign'),
  p('코비 브라이언트', 'Kobe Bryant', 'en', 'foreign'),
  p('스테픈 커리', 'Stephen Curry', 'en', 'foreign'),
  p('타이거 우즈', 'Tiger Woods', 'en', 'foreign'),
  p('세리나 윌리엄스', 'Serena Williams', 'en', 'foreign'),
  p('로저 페더러', 'Roger Federer', 'en', 'foreign'),
  p('라파엘 나달', 'Rafael Nadal', 'en', 'foreign'),
  p('노박 조코비치', 'Novak Djokovic', 'en', 'foreign'),
  p('우사인 볼트', 'Usain Bolt', 'en', 'foreign'),
  p('시몬 바일스', 'Simone Biles', 'en', 'foreign'),
  p('무하마드 알리', 'Muhammad Ali', 'en', 'foreign'),
  p('마이크 타이슨', 'Mike Tyson', 'en', 'foreign'),
  p('톰 크루즈', 'Tom Cruise', 'en', 'foreign'),
  p('레오나르도 디카프리오', 'Leonardo DiCaprio', 'en', 'foreign'),
  p('브래드 피트', 'Brad Pitt', 'en', 'foreign'),
  p('안젤리나 졸리', 'Angelina Jolie', 'en', 'foreign'),
  p('조니 뎁', 'Johnny Depp', 'en', 'foreign'),
  p('로버트 다우니 주니어', 'Robert Downey Jr.', 'en', 'foreign'),
  p('크리스 헴스워스', 'Chris Hemsworth', 'en', 'foreign'),
  p('드웨인 존슨', 'Dwayne Johnson', 'en', 'foreign'),
  p('성룡', 'Jackie Chan', 'en', 'foreign'),
  p('톰 홀랜드', 'Tom Holland', 'en', 'foreign'),
  p('젠데이아', 'Zendaya', 'en', 'foreign'),
  p('엠마 왓슨', 'Emma Watson', 'en', 'foreign'),
  p('대니얼 래드클리프', 'Daniel Radcliffe', 'en', 'foreign'),
  p('키아누 리브스', 'Keanu Reeves', 'en', 'foreign'),
  p('윌 스미스', 'Will Smith', 'en', 'foreign'),
  p('모건 프리먼', 'Morgan Freeman', 'en', 'foreign'),
  p('라이언 레이놀즈', 'Ryan Reynolds', 'en', 'foreign'),
  p('스칼렛 요한슨', 'Scarlett Johansson', 'en', 'foreign'),
  p('앤 해서웨이', 'Anne Hathaway', 'en', 'foreign'),
  p('나탈리 포트만', 'Natalie Portman', 'en', 'foreign'),
  p('메릴 스트립', 'Meryl Streep', 'en', 'foreign'),
  p('스티븐 스필버그', 'Steven Spielberg', 'en', 'foreign'),
  p('크리스토퍼 놀란', 'Christopher Nolan', 'en', 'foreign'),
  p('쿠엔틴 타란티노', 'Quentin Tarantino', 'en', 'foreign'),
  p('제임스 카메론', 'James Cameron', 'en', 'foreign'),
  p('월트 디즈니', 'Walt Disney', 'en', 'foreign'),
  p('알베르트 아인슈타인', 'Albert Einstein', 'en', 'foreign'),
  p('아이작 뉴턴', 'Isaac Newton', 'en', 'foreign'),
  p('찰스 다윈', 'Charles Darwin', 'en', 'foreign'),
  p('니콜라 테슬라', 'Nikola Tesla', 'en', 'foreign'),
  p('마리 퀴리', 'Marie Curie', 'en', 'foreign'),
  p('스티븐 호킹', 'Stephen Hawking', 'en', 'foreign'),
  p('레오나르도 다 빈치', 'Leonardo da Vinci', 'en', 'foreign'),
  p('파블로 피카소', 'Pablo Picasso', 'en', 'foreign'),
  p('빈센트 반 고흐', 'Vincent van Gogh', 'en', 'foreign'),
  p('모차르트', 'Wolfgang Amadeus Mozart', 'en', 'foreign'),
  p('베토벤', 'Ludwig van Beethoven', 'en', 'foreign'),
  p('셰익스피어', 'William Shakespeare', 'en', 'foreign'),
  p('나폴레옹', 'Napoleon', 'en', 'foreign'),
  p('율리우스 카이사르', 'Julius Caesar', 'en', 'foreign'),
  p('클레오파트라', 'Cleopatra', 'en', 'foreign'),
  p('마하트마 간디', 'Mahatma Gandhi', 'en', 'foreign'),
  p('마틴 루터 킹', 'Martin Luther King Jr.', 'en', 'foreign'),
  p('넬슨 만델라', 'Nelson Mandela', 'en', 'foreign'),
  p('윈스턴 처칠', 'Winston Churchill', 'en', 'foreign'),
  p('엘리자베스 2세', 'Elizabeth II', 'en', 'foreign'),
  p('프란치스코 교황', 'Pope Francis', 'en', 'foreign'),
  p('달라이 라마', '14th Dalai Lama', 'en', 'foreign'),
  p('그레타 툰베리', 'Greta Thunberg', 'en', 'foreign'),
  p('말랄라 유사프자이', 'Malala Yousafzai', 'en', 'foreign'),
  p('오프라 윈프리', 'Oprah Winfrey', 'en', 'foreign'),
  p('고든 램지', 'Gordon Ramsay', 'en', 'foreign'),
  p('미스터비스트', 'MrBeast', 'en', 'foreign'),
  p('마크 러팔로', 'Mark Ruffalo', 'en', 'foreign'),
  p('크리스 에반스', 'Chris Evans (actor)', 'en', 'foreign'),
  p('크리스 프랫', 'Chris Pratt', 'en', 'foreign'),
  p('베네딕트 컴버배치', 'Benedict Cumberbatch', 'en', 'foreign'),
  p('휴 잭맨', 'Hugh Jackman', 'en', 'foreign'),
  p('호아킨 피닉스', 'Joaquin Phoenix', 'en', 'foreign'),
  p('히스 레저', 'Heath Ledger', 'en', 'foreign'),
  p('마고 로비', 'Margot Robbie', 'en', 'foreign'),
  p('제니퍼 로렌스', 'Jennifer Lawrence', 'en', 'foreign'),
  p('케이트 윈슬렛', 'Kate Winslet', 'en', 'foreign'),
  p('줄리아 로버츠', 'Julia Roberts', 'en', 'foreign'),
  p('산드라 블록', 'Sandra Bullock', 'en', 'foreign'),
  p('니콜 키드먼', 'Nicole Kidman', 'en', 'foreign'),
  p('케이트 블란쳇', 'Cate Blanchett', 'en', 'foreign'),
  p('조지 클루니', 'George Clooney', 'en', 'foreign'),
  p('맷 데이먼', 'Matt Damon', 'en', 'foreign'),
  p('벤 애플렉', 'Ben Affleck', 'en', 'foreign'),
  p('해리 스타일스', 'Harry Styles', 'en', 'foreign'),
  p('두아 리파', 'Dua Lipa', 'en', 'foreign'),
  p('셀레나 고메즈', 'Selena Gomez', 'en', 'foreign'),
  p('마일리 사이러스', 'Miley Cyrus', 'en', 'foreign'),
  p('케이티 페리', 'Katy Perry', 'en', 'foreign'),
  p('샤키라', 'Shakira', 'en', 'foreign'),
  p('제니퍼 로페즈', 'Jennifer Lopez', 'en', 'foreign'),
  p('니키 미나즈', 'Nicki Minaj', 'en', 'foreign'),
  p('카디 비', 'Cardi B', 'en', 'foreign'),
  p('트래비스 스콧', 'Travis Scott', 'en', 'foreign'),
  p('포스트 말론', 'Post Malone', 'en', 'foreign'),
  p('찰리 푸스', 'Charlie Puth', 'en', 'foreign'),
  p('올리비아 로드리고', 'Olivia Rodrigo', 'en', 'foreign'),
  p('라나 델 레이', 'Lana Del Rey', 'en', 'foreign'),
  p('크리스 마틴', 'Chris Martin', 'en', 'foreign'),
  p('프레디 머큐리', 'Freddie Mercury', 'en', 'foreign'),
  p('존 레논', 'John Lennon', 'en', 'foreign'),
  p('폴 매카트니', 'Paul McCartney', 'en', 'foreign'),
  p('밥 딜런', 'Bob Dylan', 'en', 'foreign'),
  p('밥 말리', 'Bob Marley', 'en', 'foreign'),
  p('스티비 원더', 'Stevie Wonder', 'en', 'foreign'),
  p('휘트니 휴스턴', 'Whitney Houston', 'en', 'foreign'),
  p('머라이어 캐리', 'Mariah Carey', 'en', 'foreign'),
  p('셀린 디옹', 'Celine Dion', 'en', 'foreign'),
  p('알리시아 키스', 'Alicia Keys', 'en', 'foreign'),
  p('엘튼 존', 'Elton John', 'en', 'foreign'),
  p('스팅', 'Sting (musician)', 'en', 'foreign'),
  p('앤드루 가필드', 'Andrew Garfield', 'en', 'foreign'),
  p('크리스티안 베일', 'Christian Bale', 'en', 'foreign'),
  p('톰 하디', 'Tom Hardy', 'en', 'foreign'),
  p('실베스터 스탤론', 'Sylvester Stallone', 'en', 'foreign'),
  p('아널드 슈워제네거', 'Arnold Schwarzenegger', 'en', 'foreign'),
  p('브루스 윌리스', 'Bruce Willis', 'en', 'foreign'),
  p('제이슨 스타뎀', 'Jason Statham', 'en', 'foreign'),
  p('빈 디젤', 'Vin Diesel', 'en', 'foreign'),
  p('리암 니슨', 'Liam Neeson', 'en', 'foreign'),
  p('해리슨 포드', 'Harrison Ford', 'en', 'foreign'),
  p('잭 니콜슨', 'Jack Nicholson', 'en', 'foreign'),
  p('알 파치노', 'Al Pacino', 'en', 'foreign'),
  p('로버트 드 니로', 'Robert De Niro', 'en', 'foreign'),
  p('클린트 이스트우드', 'Clint Eastwood', 'en', 'foreign'),
  p('톰 행크스', 'Tom Hanks', 'en', 'foreign'),
  p('에디 머피', 'Eddie Murphy', 'en', 'foreign'),
  p('짐 캐리', 'Jim Carrey', 'en', 'foreign'),
  p('아담 샌들러', 'Adam Sandler', 'en', 'foreign'),
  p('로완 앳킨슨', 'Rowan Atkinson', 'en', 'foreign'),
  p('성룡', 'Jackie Chan', 'en', 'foreign'),
  p('브루스 리', 'Bruce Lee', 'en', 'foreign'),
  p('제트 리', 'Jet Li', 'en', 'foreign'),
  p('양조위', 'Tony Leung Chiu-wai', 'en', 'foreign'),
  p('주윤발', 'Chow Yun-fat', 'en', 'foreign'),
  p('장쯔이', 'Zhang Ziyi', 'en', 'foreign'),
  p('공리', 'Gong Li', 'en', 'foreign'),
  p('오타니 쇼헤이', 'Shohei Ohtani', 'en', 'foreign'),
  p('이치로', 'Ichiro Suzuki', 'en', 'foreign'),
  p('마이클 펠프스', 'Michael Phelps', 'en', 'foreign'),
  p('루이스 해밀턴', 'Lewis Hamilton', 'en', 'foreign'),
  p('맥스 페르스타펜', 'Max Verstappen', 'en', 'foreign'),
  p('펠레', 'Pelé', 'en', 'foreign'),
  p('디에고 마라도나', 'Diego Maradona', 'en', 'foreign'),
  p('지네딘 지단', 'Zinedine Zidane', 'en', 'foreign'),
  p('호나우두', 'Ronaldo (Brazilian footballer)', 'en', 'foreign'),
  p('호나우지뉴', 'Ronaldinho', 'en', 'foreign'),
  p('모하메드 살라', 'Mohamed Salah', 'en', 'foreign'),
  p('루카 모드리치', 'Luka Modrić', 'en', 'foreign'),
  p('케빈 더 브라위너', 'Kevin De Bruyne', 'en', 'foreign'),
  p('해리 케인', 'Harry Kane', 'en', 'foreign'),
  p('스티븐 제라드', 'Steven Gerrard', 'en', 'foreign'),
  p('프랭크 램퍼드', 'Frank Lampard', 'en', 'foreign'),
  p('웨인 루니', 'Wayne Rooney', 'en', 'foreign'),
  p('샤킬 오닐', "Shaquille O'Neal", 'en', 'foreign'),
  p('케빈 듀랜트', 'Kevin Durant', 'en', 'foreign'),
  p('카와이 레너드', 'Kawhi Leonard', 'en', 'foreign'),
  p('루카 돈치치', 'Luka Dončić', 'en', 'foreign'),
  p('니콜라 요키치', 'Nikola Jokić', 'en', 'foreign'),
  p('야오밍', 'Yao Ming', 'en', 'foreign'),
  p('코너 맥그리거', 'Conor McGregor', 'en', 'foreign'),
  p('론다 로우지', 'Ronda Rousey', 'en', 'foreign'),
  p('스티브 내시', 'Steve Nash', 'en', 'foreign'),
  p('프리다 칼로', 'Frida Kahlo', 'en', 'foreign'),
  p('앤디 워홀', 'Andy Warhol', 'en', 'foreign'),
  p('살바도르 달리', 'Salvador Dalí', 'en', 'foreign'),
  p('미켈란젤로', 'Michelangelo', 'en', 'foreign'),
];

const easyPeople = new Set([
  '손흥민',
  '김연아',
  '아이유',
  '유재석',
  '강호동',
  '백종원',
  '봉준호',
  '이정재',
  '마동석',
  '페이커',
  '박지성',
  '류현진',
  '김연경',
  '임영웅',
  '장원영',
  '지드래곤',
  '제니',
  '로제',
  '지수',
  'RM',
  '진',
  '슈가',
  '제이홉',
  '지민',
  '뷔',
  '정국',
  '차은우',
  '박보검',
  '송중기',
  '현빈',
  '손예진',
  '전지현',
  '김혜수',
  '송혜교',
  '공유',
  '이병헌',
  '황정민',
  '최민식',
  '송강호',
  '수지',
  '이효리',
  '보아',
  '태연',
  '싸이',
  '박찬호',
  '이강인',
  '황희찬',
  '김민재',
  '차범근',
  '박세리',
  '이상화',
  '장미란',
  '박태환',
  '서장훈',
  '허재',
  '신동엽',
  '전현무',
  '이경규',
  '박명수',
  '김종국',
  '이광수',
  '송지효',
  '박나래',
  '장도연',
  '이영자',
  '성시경',
  '이문세',
  '세종대왕',
  '이순신',
  '버락 오바마',
  '도널드 트럼프',
  '조 바이든',
  '일론 머스크',
  '빌 게이츠',
  '스티브 잡스',
  '마크 저커버그',
  '테일러 스위프트',
  '비욘세',
  '리한나',
  '레이디 가가',
  '아리아나 그란데',
  '빌리 아일리시',
  '저스틴 비버',
  '브루노 마스',
  '마이클 잭슨',
  '마돈나',
  '엘비스 프레슬리',
  '아델',
  '에미넴',
  '리오넬 메시',
  '크리스티아누 호날두',
  '네이마르',
  '킬리안 음바페',
  '데이비드 베컴',
  '마이클 조던',
  '르브론 제임스',
  '코비 브라이언트',
  '스테픈 커리',
  '타이거 우즈',
  '세리나 윌리엄스',
  '우사인 볼트',
  '무하마드 알리',
  '톰 크루즈',
  '레오나르도 디카프리오',
  '브래드 피트',
  '안젤리나 졸리',
  '조니 뎁',
  '로버트 다우니 주니어',
  '드웨인 존슨',
  '성룡',
  '엠마 왓슨',
  '대니얼 래드클리프',
  '윌 스미스',
  '모건 프리먼',
  '스칼렛 요한슨',
  '앤 해서웨이',
  '스티븐 스필버그',
  '크리스토퍼 놀란',
  '월트 디즈니',
  '알베르트 아인슈타인',
  '아이작 뉴턴',
  '찰스 다윈',
  '마리 퀴리',
  '스티븐 호킹',
  '레오나르도 다 빈치',
  '파블로 피카소',
  '빈센트 반 고흐',
  '모차르트',
  '베토벤',
  '셰익스피어',
  '나폴레옹',
  '클레오파트라',
  '마하트마 간디',
  '마틴 루터 킹',
  '넬슨 만델라',
  '엘리자베스 2세',
  '프란치스코 교황',
  '오프라 윈프리',
  '고든 램지',
]);

const hardPeople = new Set([
  '문별',
  '예리',
  '려욱',
  '수호(EXO)',
  '세훈(EXO)',
  '고수',
  '박해일',
  '홍상수',
  '김기덕',
  '김민하',
  '허성태',
  '위하준',
  '오영수',
  '김용건',
  '백일섭',
  '김응수',
  '김대희',
  '허경환',
  '이세돌',
  '조훈현',
  '김택용',
  '홍진호',
  '장재호',
  '문호준',
  '풍월량',
  '구광모',
  '정의선',
  '정용진',
  '한덕수',
  '유승민',
  '심상정',
  '정몽준',
  '이수만',
  '김은숙',
  '박지은',
  '김은희',
  '허영만',
  '송대관',
  '태진아',
  '설운도',
  '전유진',
  '김완선',
  '이승철',
  '김건모',
  '신승훈',
  '김범수 (가수)',
  '나얼',
  '정은지',
  '윤하',
  '효린',
  '솔라',
  '채영',
  '효연',
  '정용화',
  '이홍기',
  '규현',
  '은혁',
  '동해',
  '키(SHINee)',
  '온유(SHINee)',
  '태민(SHINee)',
  '서현진',
  '김하늘',
  '고현정',
  '염정아',
  '김선아',
  '문채원',
  '유연석',
  '이서진',
  '서인국',
  '최수종',
  '신구',
  '유동근',
  '전광렬',
  '이덕화',
  '박근형',
  '김제동',
  '팀 쿡',
  '워런 버핏',
  '위켄드',
  '드레이크',
  '스눕 독',
  '카니예 웨스트',
  '엘링 홀란',
  '시몬 바일스',
  '호아킨 피닉스',
  '히스 레저',
  '마고 로비',
  '케이트 블란쳇',
  '맷 데이먼',
  '벤 애플렉',
  '두아 리파',
  '포스트 말론',
  '라나 델 레이',
  '밥 딜런',
  '스팅',
  '크리스티안 베일',
  '톰 하디',
  '제이슨 스타뎀',
  '해리슨 포드',
  '잭 니콜슨',
  '알 파치노',
  '로버트 드 니로',
  '클린트 이스트우드',
  '에디 머피',
  '브루스 리',
  '제트 리',
  '양조위',
  '장쯔이',
  '루이스 해밀턴',
  '맥스 페르스타펜',
  '디에고 마라도나',
  '지네딘 지단',
  '호나우지뉴',
  '루카 모드리치',
  '케빈 더 브라위너',
  '샤킬 오닐',
  '케빈 듀랜트',
  '카와이 레너드',
  '니콜라 요키치',
  '코너 맥그리거',
  '론다 로우지',
  '프리다 칼로',
  '앤디 워홀',
  '살바도르 달리',
  '미켈란젤로',
]);

const proverb = (text, difficulty = 'normal') => ({ text, difficulty });

const games = {
  person: {
    title: '인물 맞추기',
    rule: '사진만 보고 인물 이름을 맞힙니다. 정답은 버튼을 눌렀을 때만 공개됩니다.',
    questions: famousPeople,
  },
  proverb: {
    title: '몸으로 말해요',
    rule: '제시된 속담을 말 없이 몸짓으로 설명하고 팀원이 맞힙니다.',
    questions: [
      proverb('가는 말이 고와야 오는 말이 곱다', 'easy'),
      proverb('고래 싸움에 새우 등 터진다', 'easy'),
      proverb('낮말은 새가 듣고 밤말은 쥐가 듣는다', 'easy'),
      proverb('돌다리도 두들겨 보고 건너라', 'easy'),
      proverb('등잔 밑이 어둡다', 'easy'),
      proverb('말 한마디에 천 냥 빚도 갚는다', 'easy'),
      proverb('믿는 도끼에 발등 찍힌다', 'easy'),
      proverb('바늘 도둑이 소 도둑 된다', 'easy'),
      proverb('백지장도 맞들면 낫다', 'easy'),
      proverb('소 잃고 외양간 고친다', 'easy'),
      proverb('우물 안 개구리', 'easy'),
      proverb('원숭이도 나무에서 떨어진다', 'easy'),
      proverb('작은 고추가 맵다', 'easy'),
      proverb('티끌 모아 태산', 'easy'),
      proverb('하늘의 별 따기', 'easy'),
      proverb('호랑이도 제 말 하면 온다', 'easy'),
      proverb('금강산도 식후경', 'easy'),
      proverb('꿩 대신 닭', 'easy'),
      proverb('눈 가리고 아웅', 'easy'),
      proverb('도랑 치고 가재 잡는다', 'easy'),
      proverb('땅 짚고 헤엄치기', 'easy'),
      proverb('발 없는 말이 천리 간다', 'easy'),
      proverb('아는 길도 물어 가라', 'easy'),
      proverb('엎질러진 물', 'easy'),
      proverb('닭 잡아먹고 오리발 내민다', 'easy'),
      proverb('하룻강아지 범 무서운 줄 모른다', 'easy'),
      proverb('하늘이 무너져도 솟아날 구멍이 있다', 'easy'),
      proverb('닭 쫓던 개 지붕 쳐다본다', 'easy'),
      proverb('될성부른 나무는 떡잎부터 알아본다', 'easy'),
      proverb('입에 쓴 약이 몸에 좋다', 'easy'),
      proverb('서당 개 삼 년이면 풍월을 읊는다', 'normal'),
      proverb('아니 땐 굴뚝에 연기 나랴', 'normal'),
      proverb('개구리 올챙이 적 생각 못 한다', 'normal'),
      proverb('공든 탑이 무너지랴', 'normal'),
      proverb('그림의 떡', 'normal'),
      proverb('김칫국부터 마신다', 'normal'),
      proverb('꿩 먹고 알 먹기', 'normal'),
      proverb('남의 떡이 더 커 보인다', 'normal'),
      proverb('누워서 침 뱉기', 'normal'),
      proverb('도토리 키 재기', 'normal'),
      proverb('똥 묻은 개가 겨 묻은 개 나무란다', 'normal'),
      proverb('마른하늘에 날벼락', 'normal'),
      proverb('모로 가도 서울만 가면 된다', 'normal'),
      proverb('배보다 배꼽이 더 크다', 'normal'),
      proverb('벼는 익을수록 고개를 숙인다', 'normal'),
      proverb('사공이 많으면 배가 산으로 간다', 'normal'),
      proverb('세 살 버릇 여든까지 간다', 'normal'),
      proverb('식은 죽 먹기', 'normal'),
      proverb('열 번 찍어 안 넘어가는 나무 없다', 'normal'),
      proverb('자라 보고 놀란 가슴 솥뚜껑 보고 놀란다', 'normal'),
      proverb('고생 끝에 낙이 온다', 'normal'),
      proverb('굴러온 돌이 박힌 돌 뺀다', 'normal'),
      proverb('급히 먹는 밥이 체한다', 'normal'),
      proverb('누울 자리 보고 발을 뻗어라', 'normal'),
      proverb('도둑이 제 발 저리다', 'normal'),
      proverb('목마른 사람이 우물 판다', 'normal'),
      proverb('비 온 뒤에 땅이 굳어진다', 'normal'),
      proverb('산 넘어 산이다', 'normal'),
      proverb('열 손가락 깨물어 안 아픈 손가락 없다', 'normal'),
      proverb('웃는 얼굴에 침 못 뱉는다', 'normal'),
      proverb('종로에서 뺨 맞고 한강에서 눈 흘긴다', 'hard'),
      proverb('가랑비에 옷 젖는 줄 모른다', 'hard'),
      proverb('가지 많은 나무에 바람 잘 날 없다', 'hard'),
      proverb('간에 붙었다 쓸개에 붙었다 한다', 'hard'),
      proverb('구슬이 서 말이라도 꿰어야 보배', 'hard'),
      proverb('급할수록 돌아가라', 'hard'),
      proverb('길고 짧은 것은 대어 보아야 안다', 'hard'),
      proverb('까마귀 날자 배 떨어진다', 'hard'),
      proverb('달면 삼키고 쓰면 뱉는다', 'hard'),
      proverb('되로 주고 말로 받는다', 'hard'),
      proverb('뛰는 놈 위에 나는 놈 있다', 'hard'),
      proverb('바늘 가는 데 실 간다', 'hard'),
      proverb('빈 수레가 요란하다', 'hard'),
      proverb('새 발의 피', 'hard'),
      proverb('손바닥도 마주쳐야 소리가 난다', 'hard'),
      proverb('숭어가 뛰니까 망둥이도 뛴다', 'hard'),
      proverb('얌전한 고양이가 부뚜막에 먼저 올라간다', 'hard'),
      proverb('열 길 물속은 알아도 한 길 사람 속은 모른다', 'hard'),
      proverb('콩 심은 데 콩 나고 팥 심은 데 팥 난다', 'hard'),
      proverb('가재는 게 편이다', 'hard'),
      proverb('굼벵이도 구르는 재주가 있다', 'hard'),
      proverb('꼬리가 길면 밟힌다', 'hard'),
      proverb('꿔다 놓은 보릿자루', 'hard'),
      proverb('달도 차면 기운다', 'hard'),
      proverb('말 타면 경마 잡히고 싶다', 'hard'),
      proverb('물에 빠지면 지푸라기라도 잡는다', 'hard'),
      proverb('배 먹고 이 닦기', 'hard'),
      proverb('소문난 잔치에 먹을 것 없다', 'hard'),
      proverb('하룻밤을 자도 만리장성을 쌓는다', 'hard'),
      proverb('핑계 없는 무덤 없다', 'hard'),
    ],
  },
  four: {
    title: '4글자 릴레이',
    rule: '제시된 네 글자 단어를 시작점으로, 팀원이 네 글자 단어를 이어 말합니다.',
    questions: [
      ['동서남북'],
      ['희로애락'],
      ['설상가상'],
      ['전화위복'],
      ['일석이조'],
      ['새옹지마'],
      ['고진감래'],
      ['오리무중'],
      ['동문서답'],
      ['작심삼일'],
      ['금상첨화'],
      ['자업자득'],
      ['천생연분'],
      ['유비무환'],
      ['역지사지'],
      ['다다익선'],
      ['이심전심'],
      ['사면초가'],
      ['대기만성'],
      ['자화자찬'],
      ['청출어람'],
      ['과유불급'],
      ['권선징악'],
      ['결자해지'],
      ['문전성시'],
      ['백전백승'],
      ['백발백중'],
      ['사필귀정'],
      ['십시일반'],
      ['안하무인'],
      ['약육강식'],
      ['어부지리'],
      ['이구동성'],
      ['일편단심'],
      ['자수성가'],
      ['적반하장'],
      ['죽마고우'],
      ['진퇴양난'],
      ['천고마비'],
      ['천재지변'],
      ['타산지석'],
      ['풍전등화'],
      ['호시탐탐'],
      ['화룡점정'],
      ['갑론을박'],
      ['감언이설'],
      ['개과천선'],
      ['건곤일척'],
      ['견물생심'],
      ['경거망동'],
      ['고군분투'],
      ['고육지책'],
      ['구사일생'],
      ['군계일학'],
      ['권토중래'],
      ['금시초문'],
      ['난공불락'],
      ['동상이몽'],
      ['막상막하'],
      ['만사형통'],
      ['명불허전'],
      ['반신반의'],
      ['배은망덕'],
      ['부전자전'],
      ['불철주야'],
      ['사리사욕'],
      ['산전수전'],
      ['삼고초려'],
      ['상부상조'],
      ['선견지명'],
      ['속수무책'],
      ['수수방관'],
      ['시종일관'],
      ['심기일전'],
      ['고속도로'],
      ['놀이공원'],
      ['제육볶음'],
      ['짜파게티'],
      ['너구리면'],
      ['삼각김밥'],
      ['순대국밥'],
      ['부대찌개'],
      ['라면사리'],
      ['닭볶음탕'],
      ['초코파이'],
      ['츄파춥스'],
      ['코카콜라'],
      ['펩시콜라'],
      ['스타벅스'],
      ['맥도날드'],
      ['롯데리아'],
      ['맘스터치'],
      ['올리브영'],
      ['카카오톡'],
      ['넷플릭스'],
      ['쿠팡이츠'],
      ['대한민국'],
      ['비밀번호'],
      ['휴대전화'],
      ['안전벨트'],
      ['조선시대'],
      ['남산타워'],
      ['한강공원'],
      ['운전면허'],
      ['학생회관'],
      ['배드민턴'],
      ['분리수거'],
      ['커피머신'],
      ['인형뽑기'],
      ['푸드코트'],
      ['김밥천국'],
      ['치즈버거'],
      ['불닭볶음'],
      ['카페라떼'],
      ['딸기우유'],
      ['감자튀김'],
      ['치킨너겟'],
      ['양념치킨'],
      ['후라이드'],
      ['치즈스틱'],
      ['호두과자'],
      ['소떡소떡'],
      ['타코야끼'],
      ['마라샹궈'],
      ['오피스텔'],
      ['동아리방'],
      ['구급상자'],
      ['마스크팩'],
      ['핸드크림'],
      ['연필깎이'],
      ['포스트잇'],
      ['블랙핑크'],
      ['소녀시대'],
      ['동방신기'],
      ['원더걸스'],
    ],
  },
  initial: {
    title: '초성 릴레이',
    rule: '제시된 초성으로 단어를 말합니다. 같은 단어 반복 금지.',
    questions: [
      ['ㄱㅅ', '예: 가수, 감성, 교실'],
      ['ㅅㄹ', '예: 사랑, 서랍, 소리'],
      ['ㅂㄷ', '예: 바다, 보드, 부담'],
      ['ㅁㅌ', '예: 마트, 모터, 미팅'],
      ['ㅈㄱ', '예: 지갑, 장갑, 조건'],
      ['ㅎㅅ', '예: 학생, 회사, 호수'],
      ['ㄷㅂ', '예: 대박, 두부, 담배'],
      ['ㅊㅋ', '예: 축하, 체크, 치킨'],
      ['ㅇㅈ', '예: 인정, 의자, 안전'],
      ['ㅋㅍ', '예: 커피, 쿠폰, 캠프'],
      ['ㅌㅇ', '예: 타워, 통역, 퇴원'],
      ['ㄴㄹ', '예: 노래, 나라, 노력'],
      ['ㅍㅅ', '예: 필승, 풍선, 패션'],
      ['ㄹㅁ', '예: 라면, 로마, 루머'],
      ['ㅅㅈ', '예: 사진, 시장, 시작'],
      ['ㅁㄱ', '예: 물건, 문구, 마구'],
      ['ㅈㅁ', '예: 질문, 주먹, 장면'],
      ['ㅇㄱ', '예: 얼굴, 안경, 야구'],
      ['ㅂㅅ', '예: 방송, 버스, 박수'],
      ['ㄱㅁ', '예: 고마, 가면, 구멍'],
      ['ㄱㅂ', '예: 가방, 고비, 고봉'],
      ['ㄷㅈ', '예: 도전, 대장, 돼지'],
      ['ㅁㅅ', '예: 매수, 미성, 마술'],
      ['ㅅㅂ', '예: 사비, 서버, 새벽'],
      ['ㄱㄴ', '예: 가능, 기능, 개념'],
      ['ㅈㅅ', '예: 잠실, 재수, 자수'],
      ['ㅎㅂ', '예: 후배, 헌법, 후방'],
      ['ㅌㅅ', '예: 타석, 퇴사, 토성'],
      ['ㅇㅅ', '예: 인성, 인사, 야수'],
      ['ㄴㅅ', '예: 노쇼, 내수, 노산'],
      ['ㅂㄱ', '예: 발견, 부고, 복기'],
      ['ㅅㄱ', '예: 숙고, 사고, 사과'],
      ['ㅎㄱ', '예: 학교, 한국, 해결'],
    ],
  },
};

const state = {
  currentGame: 'person',
  decks: {},
  drawnCounts: {},
  currentQuestion: null,
  isRoundEnded: false,
  personRoundSize: 50,
  imageCache: {},
  humanCache: {},
  imageRequestId: 0,
  personRegion: 'korean',
  personDifficulty: 'easy',
  proverbRoundSize: 10,
  proverbDifficulty: 'easy',
  fourRoundSize: 30,
  initialRoundSize: 10,
  timerSeconds: 60,
  timerLeft: 60,
  timerId: null,
  teams: [
    { name: '1팀', score: 0 },
    { name: '2팀', score: 0 },
    { name: '3팀', score: 0 },
    { name: '4팀', score: 0 },
  ],
};

if (typeof document === 'undefined') {
  console.log('app.js는 브라우저에서 실행되는 파일입니다.');
  console.log('앱 실행: npm start 후 http://localhost:5173 접속');
  process.exit(0);
}

const $ = (selector) => document.querySelector(selector);

const els = {
  gameTabs: $('#gameTabs'),
  personSettings: $('#personSettings'),
  proverbSettings: $('#proverbSettings'),
  fourSettings: $('#fourSettings'),
  initialSettings: $('#initialSettings'),
  gameBadge: $('#gameBadge'),
  remainText: $('#remainText'),
  ruleText: $('#ruleText'),
  questionText: $('#questionText'),
  answerText: $('#answerText'),
  drawBtn: $('#drawBtn'),
  revealBtn: $('#revealBtn'),
  passBtn: $('#passBtn'),
  shuffleBtn: $('#shuffleBtn'),
  fullscreenBtn: $('#fullscreenBtn'),
  timerDisplay: $('#timerDisplay'),
  timerState: $('#timerState'),
  startTimerBtn: $('#startTimerBtn'),
  pauseTimerBtn: $('#pauseTimerBtn'),
  resetTimerBtn: $('#resetTimerBtn'),
  scoreList: $('#scoreList'),
  addTeamBtn: $('#addTeamBtn'),
  resetScoreBtn: $('#resetScoreBtn'),
  customQuestion: $('#customQuestion'),
  customAnswer: $('#customAnswer'),
  addQuestionBtn: $('#addQuestionBtn'),
};

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildDeck(gameKey) {
  const personPool = getPersonPool();
  const questions =
    gameKey === 'person'
      ? shuffle(personPool)
      : gameKey === 'proverb'
        ? getProverbRoundQuestions()
        : gameKey === 'four'
          ? getFourRoundQuestions()
          : gameKey === 'initial'
            ? getInitialRoundQuestions()
            : games[gameKey].questions;
  state.decks[gameKey] = shuffle(questions);
  state.drawnCounts[gameKey] = 0;
}

function getProverbPool() {
  if (state.proverbDifficulty === 'random') return games.proverb.questions;
  return games.proverb.questions.filter(
    (item) => item.difficulty === state.proverbDifficulty,
  );
}

function getProverbRoundTotal() {
  const poolSize = getProverbPool().length;
  return state.proverbRoundSize === 'all'
    ? poolSize
    : Math.min(state.proverbRoundSize, poolSize);
}

function getProverbRoundQuestions() {
  if (state.proverbDifficulty !== 'random') {
    return shuffle(getProverbPool()).slice(0, getProverbRoundTotal());
  }

  const difficulties = ['easy', 'normal', 'hard'];
  const grouped = difficulties.map((difficulty) =>
    shuffle(
      games.proverb.questions.filter((item) => item.difficulty === difficulty),
    ),
  );
  const total = getProverbRoundTotal();
  const baseCount = Math.floor(total / difficulties.length);
  const extraCount = total % difficulties.length;
  const extraSlots = shuffle(difficulties.map((_, index) => index)).slice(
    0,
    extraCount,
  );

  return shuffle(
    grouped.flatMap((items, index) =>
      items.slice(0, baseCount + (extraSlots.includes(index) ? 1 : 0)),
    ),
  );
}

function getFourRoundTotal() {
  const poolSize = games.four.questions.length;
  return state.fourRoundSize === 'all'
    ? poolSize
    : Math.min(state.fourRoundSize, poolSize);
}

function getFourRoundQuestions() {
  return shuffle(games.four.questions).slice(0, getFourRoundTotal());
}

function getInitialRoundTotal() {
  return Math.min(state.initialRoundSize, games.initial.questions.length);
}

function getInitialRoundQuestions() {
  return shuffle(games.initial.questions).slice(0, getInitialRoundTotal());
}

function getPersonBasePool() {
  const koreanPeople = uniquePeople(
    games.person.questions.filter((person) => person.region === 'korean'),
  ).slice(0, 300);
  const foreignPeople = uniquePeople(
    games.person.questions.filter((person) => person.region === 'foreign'),
  ).slice(0, 200);

  return state.personRegion === 'korean'
    ? koreanPeople
    : [...koreanPeople, ...foreignPeople];
}

function getPersonPool() {
  const regionPeople = getPersonBasePool();
  const filteredPeople = filterPeopleByDifficulty(regionPeople);
  if (
    state.personDifficulty === 'all' ||
    state.personDifficulty === 'normal'
  ) {
    return filteredPeople;
  }

  const targetSize = getPersonRoundTotal();
  if (filteredPeople.length >= targetSize) return filteredPeople;

  const filteredNames = new Set(filteredPeople.map((person) => person.name));
  const supplements = regionPeople.filter(
    (person) => !filteredNames.has(person.name),
  );
  return [...filteredPeople, ...supplements].slice(0, targetSize);
}

function getPersonRoundLimit() {
  const regionPeople = getPersonBasePool();
  if (state.personDifficulty === 'all') return regionPeople.length;
  if (state.personDifficulty === 'normal') {
    return filterPeopleByDifficulty(regionPeople).length;
  }
  return Math.min(100, regionPeople.length);
}

function getPersonDifficulty(person) {
  if (easyPeople.has(person.name)) return 'easy';
  if (hardPeople.has(person.name)) return 'hard';
  return 'normal';
}

function filterPeopleByDifficulty(people) {
  if (state.personDifficulty === 'all') return people;
  return people.filter(
    (person) => getPersonDifficulty(person) === state.personDifficulty,
  );
}

function uniquePeople(people) {
  const seen = new Set();
  return people.filter((person) => {
    if (seen.has(person.name)) return false;
    seen.add(person.name);
    return true;
  });
}

function getPersonRoundTotal() {
  return Math.min(state.personRoundSize, getPersonRoundLimit());
}

function ensureDeck(gameKey) {
  if (!state.decks[gameKey]) {
    buildDeck(gameKey);
  }
  return state.decks[gameKey];
}

function getDrawableDeck(gameKey) {
  if (!state.decks[gameKey]) {
    buildDeck(gameKey);
  }
  return state.decks[gameKey];
}

function renderTabs() {
  els.gameTabs.innerHTML = '';
  Object.entries(games).forEach(([key, game]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = game.title;
    button.className = key === state.currentGame ? 'active' : '';
    button.addEventListener('click', () => selectGame(key));
    els.gameTabs.append(button);
  });
}

function renderPersonSettings() {
  els.personSettings.classList.toggle('hidden', state.currentGame !== 'person');
  document.querySelectorAll('.person-size').forEach((button) => {
    const size = Number(button.dataset.size);
    button.disabled = size > getPersonRoundLimit();
    button.classList.toggle(
      'active',
      Number(button.dataset.size) === state.personRoundSize,
    );
  });
  document.querySelectorAll('.person-region').forEach((button) => {
    button.classList.toggle(
      'active',
      button.dataset.region === state.personRegion,
    );
  });
  document.querySelectorAll('.person-difficulty').forEach((button) => {
    const difficulty = button.dataset.difficulty;
    button.classList.toggle('active', difficulty === state.personDifficulty);
  });
}

function renderProverbSettings() {
  els.proverbSettings.classList.toggle(
    'hidden',
    state.currentGame !== 'proverb',
  );
  document.querySelectorAll('.proverb-size').forEach((button) => {
    const size =
      button.dataset.size === 'all' ? 'all' : Number(button.dataset.size);
    const active = size === state.proverbRoundSize;
    const disabled = size !== 'all' && size > getProverbPool().length;
    button.disabled = disabled;
    button.classList.toggle('active', active);
  });
  document.querySelectorAll('.proverb-difficulty').forEach((button) => {
    button.classList.toggle(
      'active',
      button.dataset.difficulty === state.proverbDifficulty,
    );
  });
}

function renderFourSettings() {
  els.fourSettings.classList.toggle('hidden', state.currentGame !== 'four');
  document.querySelectorAll('.four-size').forEach((button) => {
    const size =
      button.dataset.size === 'all' ? 'all' : Number(button.dataset.size);
    const active = size === state.fourRoundSize;
    const disabled =
      size !== 'all' && size > games.four.questions.length;
    button.disabled = disabled;
    button.classList.toggle('active', active);
  });
}

function renderInitialSettings() {
  els.initialSettings.classList.toggle(
    'hidden',
    state.currentGame !== 'initial',
  );
  document.querySelectorAll('.initial-size').forEach((button) => {
    const size = Number(button.dataset.size);
    button.disabled = size > games.initial.questions.length;
    button.classList.toggle('active', size === state.initialRoundSize);
  });
}

function selectGame(gameKey) {
  state.currentGame = gameKey;
  state.currentQuestion = null;
  state.isRoundEnded = false;
  els.questionText.textContent = 'START';
  els.answerText.classList.add('hidden');
  render();
}

function renderQuestion() {
  const game = games[state.currentGame];
  const total =
    state.currentGame === 'person'
      ? getPersonRoundTotal()
      : state.currentGame === 'proverb'
        ? getProverbRoundTotal()
        : state.currentGame === 'four'
          ? getFourRoundTotal()
          : state.currentGame === 'initial'
            ? getInitialRoundTotal()
            : game.questions.length;
  const drawn = state.drawnCounts[state.currentGame] || 0;
  els.gameBadge.textContent = game.title;
  els.ruleText.textContent = game.rule;
  els.remainText.textContent = `전체 ${total}개 · 이번 라운드 ${drawn}/${total}`;
  els.customQuestion.placeholder =
    state.currentGame === 'person' ? '예: 유재석' : '예: 새 문제';
  els.customAnswer.placeholder =
    state.currentGame === 'person' ? '사진 URL 또는 위키 제목' : '선택 입력';

  if (!state.currentQuestion) {
    if (state.isRoundEnded) {
      els.questionText.textContent = 'END';
    }
    els.answerText.classList.add('hidden');
    els.answerText.textContent = '';
    return;
  }

  if (state.currentGame === 'person') {
    renderPersonQuestion(state.currentQuestion);
    return;
  }

  if (state.currentGame === 'proverb') {
    els.questionText.textContent = state.currentQuestion.text;
    els.answerText.textContent = '';
    return;
  }

  const [question, answer] = state.currentQuestion;
  if (state.currentGame === 'four') {
    els.questionText.textContent = `${[...question].slice(0, 2).join('')}○○`;
    els.answerText.textContent = `정답: ${question}`;
    return;
  }

  els.questionText.textContent = question;
  els.answerText.textContent = answer
    ? `힌트/정답: ${answer}`
    : '정답 정보 없음';
}

async function getPersonImage(person) {
  if (person.image) return person.image;
  if (imageOverrides[person.name]) return imageOverrides[person.name];

  const cacheKey = `${person.lang}:${person.title}`;
  if (state.imageCache[cacheKey]) return state.imageCache[cacheKey];

  const candidates = [
    [person.lang, person.title],
    [person.lang, person.name],
    ['ko', person.title],
    ['ko', person.name],
    ['en', person.title],
    ['en', person.name],
  ];
  const seenCandidates = new Set();

  for (const [lang, title] of candidates) {
    const candidateKey = `${lang}:${title}`;
    if (seenCandidates.has(candidateKey)) continue;
    seenCandidates.add(candidateKey);
    const imageUrl = await getWikipediaSummaryImage(lang, title);
    if (imageUrl) {
      state.imageCache[cacheKey] = imageUrl;
      return imageUrl;
    }
  }

  const searchTitles = [...new Set([person.title, person.name])];
  for (const title of searchTitles) {
    const commonsSearchImage = await getCommonsSearchImage(title);
    if (commonsSearchImage) {
      state.imageCache[cacheKey] = commonsSearchImage;
      return commonsSearchImage;
    }

    const mediaSearchImage = await getCommonsMediaSearchImage(title);
    if (mediaSearchImage) {
      state.imageCache[cacheKey] = mediaSearchImage;
      return mediaSearchImage;
    }
  }

  throw new Error(`No usable person image for ${person.name}`);
}

async function getWikipediaSummaryImage(lang, title) {
  try {
    const url = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
    const response = await fetch(url);
    if (!response.ok) return '';

    const data = await response.json();
    const summaryImage =
      data.originalimage?.source || data.thumbnail?.source || '';
    if (isUsablePersonImage(summaryImage, title)) return summaryImage;

    const pageImage = await getPageImage(lang, data.title || title);
    if (isUsablePersonImage(pageImage, title)) return pageImage;

    const pageFileImage = await getPageFileImage(lang, data.title || title);
    if (isUsablePersonImage(pageFileImage, title)) return pageFileImage;

    const wikidataImage = await getWikidataImage(data.wikibase_item, title);
    if (isUsablePersonImage(wikidataImage, title)) return wikidataImage;

    const commonsImage = await getCommonsCategoryImage(
      data.wikibase_item,
      title,
    );
    if (isUsablePersonImage(commonsImage, title)) return commonsImage;

    const commonsSearchImage = await getCommonsSearchImage(data.title || title);
    if (isUsablePersonImage(commonsSearchImage, title)) {
      return commonsSearchImage;
    }

    const mediaSearchImage = await getCommonsMediaSearchImage(
      data.title || title,
    );
    if (isUsablePersonImage(mediaSearchImage, title)) {
      return mediaSearchImage;
    }

    return '';
  } catch {
    return '';
  }
}

async function getPageImage(lang, title) {
  try {
    const url = `https://${lang}.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&pithumbsize=1000&format=json&origin=*`;
    const response = await fetch(url);
    if (!response.ok) return '';

    const data = await response.json();
    const pages = Object.values(data.query?.pages || {});
    return (
      pages.find((page) => page.thumbnail?.source)?.thumbnail?.source || ''
    );
  } catch {
    return '';
  }
}

async function getPageFileImage(lang, title) {
  try {
    const url = `https://${lang}.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=images&imlimit=50&format=json&origin=*`;
    const response = await fetch(url);
    if (!response.ok) return '';

    const data = await response.json();
    const pages = Object.values(data.query?.pages || {});
    const imageTitles = pages
      .flatMap((page) => page.images || [])
      .map((image) => image.title)
      .filter((imageTitle) => !hasBadImageTitle(imageTitle))
      .slice(0, 12);

    return getCommonsFileInfoImage(imageTitles, title);
  } catch {
    return '';
  }
}

async function getCommonsCategoryImage(wikidataId, title) {
  try {
    const category = await getCommonsCategory(wikidataId);
    if (!category) return '';

    const directImage = await getCommonsCategoryFile(category, title);
    if (directImage) return directImage;

    const url = `https://commons.wikimedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${encodeURIComponent(category)}&cmtype=subcat&cmlimit=8&format=json&origin=*`;
    const response = await fetch(url);
    if (!response.ok) return '';

    const data = await response.json();
    const subcategories = data.query?.categorymembers || [];
    for (const subcategory of subcategories) {
      const subcategoryName = subcategory.title?.replace(/^Category:/, '');
      const imageUrl = await getCommonsCategoryFile(subcategoryName, title);
      if (imageUrl) return imageUrl;
    }

    return '';
  } catch {
    return '';
  }
}

async function getCommonsCategoryFile(category, title) {
  if (!category) return '';

  try {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtitle=Category:${encodeURIComponent(category)}&gcmtype=file&gcmlimit=30&prop=imageinfo&iiprop=url|mime&iiurlwidth=1000&format=json&origin=*`;
    const response = await fetch(url);
    if (!response.ok) return '';

    const data = await response.json();
    const files = Object.values(data.query?.pages || {});
    const imageFile = selectBestPersonImageFile(files, title);
    return imageFile?.imageinfo?.[0]?.thumburl || '';
  } catch {
    return '';
  }
}

async function getCommonsSearchImage(title) {
  if (!title) return '';

  try {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(title)}&gsrlimit=8&prop=imageinfo&iiprop=url|mime&iiurlwidth=1000&format=json&origin=*`;
    const response = await fetch(url);
    if (!response.ok) return '';

    const data = await response.json();
    const files = Object.values(data.query?.pages || {});
    const imageFile = selectBestPersonImageFile(files, title);
    return imageFile?.imageinfo?.[0]?.thumburl || '';
  } catch {
    return '';
  }
}

async function getCommonsMediaSearchImage(title) {
  if (!title) return '';

  try {
    const url = `https://commons.wikimedia.org/w/api.php?action=wbsearchentities&search=${encodeURIComponent(title)}&language=ko&type=mediainfo&limit=10&format=json&origin=*`;
    const response = await fetch(url);
    if (!response.ok) return '';

    const data = await response.json();
    const fileTitles = (data.search || [])
      .map((item) => item.title)
      .filter((fileTitle) => fileTitle && !hasBadImageTitle(fileTitle))
      .slice(0, 8);

    return getCommonsFileInfoImage(fileTitles, title);
  } catch {
    return '';
  }
}

async function getCommonsFileInfoImage(fileTitles, title) {
  const titles = fileTitles
    .map((fileTitle) =>
      fileTitle.startsWith('File:') ? fileTitle : `File:${fileTitle}`,
    )
    .filter((fileTitle) => !hasBadImageTitle(fileTitle));

  if (titles.length === 0) return '';

  try {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles.join('|'))}&prop=imageinfo&iiprop=url|mime&iiurlwidth=1000&format=json&origin=*`;
    const response = await fetch(url);
    if (!response.ok) return '';

    const data = await response.json();
    const files = Object.values(data.query?.pages || {});
    const imageFile = selectBestPersonImageFile(files, title);
    return imageFile?.imageinfo?.[0]?.thumburl || '';
  } catch {
    return '';
  }
}

async function getWikidataImage(wikidataId, title) {
  const entity = await getWikidataEntity(wikidataId);
  const imageName = entity?.claims?.P18?.[0]?.mainsnak?.datavalue?.value;
  if (typeof imageName !== 'string') return '';
  const imageUrl = commonsFile(imageName);
  return isUsablePersonImage(imageUrl, title) ? imageUrl : '';
}

async function getCommonsCategory(wikidataId) {
  const entity = await getWikidataEntity(wikidataId);
  const commonsCategory =
    entity?.claims?.P373?.[0]?.mainsnak?.datavalue?.value;
  return typeof commonsCategory === 'string' ? commonsCategory : '';
}

async function getWikidataEntity(wikidataId) {
  if (!wikidataId) return null;

  try {
    const url = `https://www.wikidata.org/wiki/Special:EntityData/${encodeURIComponent(wikidataId)}.json`;
    const response = await fetch(url);
    if (!response.ok) return null;

    const data = await response.json();
    return data.entities?.[wikidataId] || null;
  } catch {
    return null;
  }
}

function isUsablePersonImage(url, title) {
  if (!url) return false;
  const lower = decodeURIComponent(url).toLowerCase();
  const blocked = [
    '.svg',
    'logo',
    'icon',
    'poster',
    'album',
    'cover',
    'signature',
    'emblem',
    'seal',
    'text',
    'wordmark',
    'banner',
    'group',
    'groups',
    'members',
    'member',
    'cast',
    'crew',
    'team',
    'family',
    'couple',
    'together',
    'collage',
    'montage',
    'with ',
    ' with',
    ' and ',
    ' & ',
    'feat',
    'featuring',
    '단체',
    '멤버',
    '출연진',
    '가족',
    '커플',
    '합동',
  ];

  if (blocked.some((word) => lower.includes(word))) return false;
  return true;
}

function isImageMime(mime) {
  return typeof mime === 'string' && mime.startsWith('image/');
}

function selectBestPersonImageFile(files, title) {
  return files
    .filter((file) => {
      const info = file.imageinfo?.[0];
      return (
        info?.thumburl &&
        isImageMime(info.mime) &&
        isUsablePersonImage(info.thumburl, title) &&
        !hasBadImageTitle(file.title)
      );
    })
    .sort((a, b) => {
      return (
        getPersonImageTitleScore(b.title, title) -
        getPersonImageTitleScore(a.title, title)
      );
    })[0];
}

function getPersonImageTitleScore(fileTitle, title) {
  const lowerTitle = normalizeImageText(fileTitle);
  const lowerPerson = normalizeImageText(title);
  let score = 0;

  if (lowerTitle.includes(lowerPerson)) score += 8;
  if (/\b(portrait|profile|headshot|solo|press|photo)\b/.test(lowerTitle)) {
    score += 5;
  }
  if (/\b(red carpet|airport|interview|conference|event)\b/.test(lowerTitle)) {
    score += 2;
  }
  if (hasMultiPersonHint(fileTitle)) score -= 20;
  return score;
}

function normalizeImageText(text) {
  return decodeURIComponent(String(text || ''))
    .toLowerCase()
    .replace(/^file:/, '')
    .replace(/\([^)]*\)/g, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function hasBadImageTitle(title) {
  const lower = title.toLowerCase();
  const blocked = [
    'logo',
    'icon',
    'poster',
    'album',
    'cover',
    'signature',
    'text',
    'wordmark',
    'banner',
    'album',
    'single',
    'soundtrack',
  ];

  return blocked.some((word) => lower.includes(word)) || hasMultiPersonHint(title);
}

function hasMultiPersonHint(title) {
  const lower = normalizeImageText(title);
  return [
    'group',
    'groups',
    'members',
    'cast',
    'crew',
    'team',
    'family',
    'couple',
    'together',
    'collage',
    'montage',
    'with ',
    ' with',
    ' and ',
    ' & ',
    'feat',
    'featuring',
    '단체',
    '멤버',
    '출연진',
    '가족',
    '커플',
    '합동',
  ].some((word) => lower.includes(word));
}

async function isHumanSummary(summary) {
  const wikidataId = summary.wikibase_item;
  if (!wikidataId) return false;
  if (wikidataId in state.humanCache) return state.humanCache[wikidataId];

  try {
    const url = `https://www.wikidata.org/wiki/Special:EntityData/${encodeURIComponent(wikidataId)}.json`;
    const response = await fetch(url);
    if (!response.ok) return false;

    const data = await response.json();
    const entity = data.entities?.[wikidataId];
    const instances = entity?.claims?.P31 || [];
    const isHuman = instances.some((claim) => {
      return claim.mainsnak?.datavalue?.value?.id === 'Q5';
    });
    state.humanCache[wikidataId] = isHuman;
    return isHuman;
  } catch {
    return false;
  }
}

function makeFallbackPortrait(name) {
  const initials = name.replace(/\s+/g, '').slice(0, 2);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="650" viewBox="0 0 900 650">
      <rect width="900" height="650" fill="#121417"/>
      <circle cx="450" cy="245" r="116" fill="#eef2ff"/>
      <path d="M214 610c32-134 122-205 236-205s204 71 236 205" fill="#eef2ff"/>
      <text x="450" y="585" text-anchor="middle" font-family="Arial, sans-serif" font-size="72" font-weight="800" fill="#2563eb">${initials}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function renderPersonQuestion(person) {
  const requestId = (state.imageRequestId += 1);
  els.questionText.innerHTML =
    '<div class="photo-loading" aria-label="사진 로딩 중"></div>';
  els.answerText.textContent = `정답: ${person.name}`;

  getPersonImage(person)
    .then((src) => {
      if (requestId !== state.imageRequestId) return;
      showPersonImage(person, src, requestId);
    })
    .catch(() => {
      if (requestId === state.imageRequestId) {
        showPersonFallback(person, requestId);
      }
    });
}

function showPersonImage(person, src, requestId) {
  els.questionText.innerHTML = '';
  const image = document.createElement('img');
  image.className = 'person-photo';
  image.classList.toggle(
    'text-crop-top',
    textCroppedPeople.has(person.name),
  );
  image.src = src;
  image.alt = '인물 맞추기 사진';
  image.loading = 'eager';
  image.referrerPolicy = 'no-referrer';
  image.addEventListener('load', () => {
    tunePersonPhotoCrop(image);
    countDisplayedQuestion();
  });
  image.onerror = () => {
    if (requestId === state.imageRequestId) {
      showPersonFallback(person, requestId);
    }
  };
  els.questionText.append(image);
}

function showPersonFallback(person, requestId) {
  if (requestId !== state.imageRequestId) return;
  els.questionText.innerHTML = '';
  const image = document.createElement('img');
  image.className = 'person-photo';
  image.src = makeFallbackPortrait(person.name);
  image.alt = '인물 맞추기 사진';
  image.addEventListener('load', () => {
    tunePersonPhotoCrop(image);
    countDisplayedQuestion();
  });
  els.questionText.append(image);
}

function tunePersonPhotoCrop(image) {
  const ratio = image.naturalWidth / Math.max(1, image.naturalHeight);
  image.classList.toggle('landscape', ratio > 1.2);
  image.classList.toggle('portrait', ratio < 0.82);
  image.classList.toggle('square', ratio >= 0.82 && ratio <= 1.2);
}

function countDisplayedQuestion() {
  if (!state.currentQuestion || state.currentQuestion.counted) return;
  state.currentQuestion.counted = true;
  state.drawnCounts[state.currentGame] =
    (state.drawnCounts[state.currentGame] || 0) + 1;
  const total =
    state.currentGame === 'person'
      ? getPersonRoundTotal()
      : state.currentGame === 'proverb'
        ? getProverbRoundTotal()
        : state.currentGame === 'four'
          ? getFourRoundTotal()
          : state.currentGame === 'initial'
            ? getInitialRoundTotal()
            : games[state.currentGame].questions.length;
  els.remainText.textContent = `전체 ${total}개 · 이번 라운드 ${state.drawnCounts[state.currentGame]}/${total}`;
}

function setPersonRoundSize(size) {
  state.personRoundSize = Math.min(size, getPersonRoundLimit());
  resetPersonRound();
}

function setPersonRegion(region) {
  state.personRegion = region;
  state.personRoundSize = Math.min(
    state.personRoundSize,
    getPersonRoundLimit(),
  );
  resetPersonRound();
}

function setPersonDifficulty(difficulty) {
  state.personDifficulty = difficulty;
  state.personRoundSize = Math.min(
    state.personRoundSize,
    getPersonRoundLimit(),
  );
  resetPersonRound();
}

function resetPersonRound() {
  buildDeck('person');
  if (state.currentGame === 'person') {
    state.currentQuestion = null;
    state.isRoundEnded = false;
    els.questionText.textContent = 'START';
    els.answerText.classList.add('hidden');
  }
  render();
}

function setProverbRoundSize(size) {
  state.proverbRoundSize = size === 'all' ? 'all' : Number(size);
  resetProverbRound();
}

function setProverbDifficulty(difficulty) {
  state.proverbDifficulty = difficulty;
  if (
    state.proverbRoundSize !== 'all' &&
    state.proverbRoundSize > getProverbPool().length
  ) {
    state.proverbRoundSize = 'all';
  }
  resetProverbRound();
}

function resetProverbRound() {
  buildDeck('proverb');
  if (state.currentGame === 'proverb') {
    state.currentQuestion = null;
    state.isRoundEnded = false;
    els.questionText.textContent = 'START';
    els.answerText.classList.add('hidden');
  }
  render();
}

function setFourRoundSize(size) {
  state.fourRoundSize = size === 'all' ? 'all' : Number(size);
  resetFourRound();
}

function resetFourRound() {
  buildDeck('four');
  if (state.currentGame === 'four') {
    state.currentQuestion = null;
    state.isRoundEnded = false;
    els.questionText.textContent = 'START';
    els.answerText.classList.add('hidden');
  }
  render();
}

function setInitialRoundSize(size) {
  state.initialRoundSize = Math.min(
    Number(size),
    games.initial.questions.length,
  );
  resetInitialRound();
}

function resetInitialRound() {
  buildDeck('initial');
  if (state.currentGame === 'initial') {
    state.currentQuestion = null;
    state.isRoundEnded = false;
    els.questionText.textContent = 'START';
    els.answerText.classList.add('hidden');
  }
  render();
}

function drawQuestion(resetImageRetries = true) {
  const deck = getDrawableDeck(state.currentGame);
  if (
    state.currentGame === 'person' &&
    (state.drawnCounts.person || 0) >= getPersonRoundTotal()
  ) {
    state.currentQuestion = null;
    state.isRoundEnded = true;
    els.questionText.textContent = 'END';
    els.answerText.classList.add('hidden');
    renderQuestion();
    return;
  }

  if (deck.length === 0) {
    state.currentQuestion = null;
    state.isRoundEnded = true;
    els.questionText.textContent = 'END';
    els.answerText.classList.add('hidden');
    renderQuestion();
    return;
  }

  const nextQuestion = deck.pop();
  state.currentQuestion =
    state.currentGame === 'person'
      ? { ...nextQuestion, counted: false }
      : nextQuestion;
  state.isRoundEnded = false;
  if (state.currentGame !== 'person') {
    state.drawnCounts[state.currentGame] =
      (state.drawnCounts[state.currentGame] || 0) + 1;
  }
  els.answerText.classList.add('hidden');
  renderQuestion();
}

function revealAnswer() {
  if (!state.currentQuestion) return;
  els.answerText.classList.toggle('hidden');
}

function shuffleCurrentGame() {
  buildDeck(state.currentGame);
  state.currentQuestion = null;
  state.isRoundEnded = false;
  els.questionText.textContent = '다시 섞었습니다';
  els.answerText.classList.add('hidden');
  renderQuestion();
}

function setTimer(seconds) {
  state.timerSeconds = seconds;
  state.timerLeft = seconds;
  stopTimer('대기');
  renderTimer();
  document.querySelectorAll('.preset').forEach((button) => {
    button.classList.toggle('active', Number(button.dataset.time) === seconds);
  });
}

function renderTimer() {
  els.timerDisplay.textContent = state.timerLeft;
  els.timerDisplay.classList.toggle(
    'warning',
    state.timerLeft <= 10 && state.timerLeft > 0,
  );
  els.timerDisplay.classList.toggle('done', state.timerLeft === 0);
}

function startTimer() {
  if (state.timerId || state.timerLeft === 0) return;
  els.timerState.textContent = '진행중';
  state.timerId = window.setInterval(() => {
    state.timerLeft = Math.max(0, state.timerLeft - 1);
    renderTimer();
    if (state.timerLeft === 0) {
      stopTimer('종료');
    }
  }, 1000);
}

function stopTimer(label = '정지') {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
  els.timerState.textContent = label;
}

function resetTimer() {
  state.timerLeft = state.timerSeconds;
  stopTimer('대기');
  renderTimer();
}

function renderScores() {
  els.scoreList.innerHTML = '';
  state.teams.forEach((team, index) => {
    const row = document.createElement('div');
    row.className = 'team-row';

    const name = document.createElement('div');
    name.className = 'team-name';
    name.textContent = team.name;

    const minus = document.createElement('button');
    minus.type = 'button';
    minus.textContent = '-';
    minus.ariaLabel = `${team.name} 감점`;
    minus.addEventListener('click', () => updateScore(index, -1));

    const score = document.createElement('div');
    score.className = 'team-score';
    score.textContent = team.score;

    const plus = document.createElement('button');
    plus.type = 'button';
    plus.textContent = '+';
    plus.ariaLabel = `${team.name} 득점`;
    plus.addEventListener('click', () => updateScore(index, 1));

    row.append(name, minus, score, plus);
    els.scoreList.append(row);
  });
}

function updateScore(index, amount) {
  state.teams[index].score += amount;
  renderScores();
}

function addTeam() {
  state.teams.push({ name: `${state.teams.length + 1}팀`, score: 0 });
  renderScores();
}

function resetScores() {
  state.teams = state.teams.map((team) => ({ ...team, score: 0 }));
  renderScores();
}

function addCustomQuestion() {
  const question = els.customQuestion.value.trim();
  const answer = els.customAnswer.value.trim();
  if (!question) {
    els.customQuestion.focus();
    return;
  }

  const customItem =
    state.currentGame === 'person'
      ? {
          name: question,
          title: answer && !/^https?:\/\//i.test(answer) ? answer : question,
          lang: 'ko',
          image: /^https?:\/\//i.test(answer) ? answer : '',
        }
      : state.currentGame === 'proverb'
        ? {
            text: question,
            difficulty:
              state.proverbDifficulty === 'random'
                ? 'normal'
                : state.proverbDifficulty,
          }
        : [question, answer];
  games[state.currentGame].questions.push(customItem);
  state.decks[state.currentGame] = [
    customItem,
    ...ensureDeck(state.currentGame),
  ];
  els.customQuestion.value = '';
  els.customAnswer.value = '';
  els.questionText.textContent = '문제가 추가되었습니다';
  els.answerText.classList.add('hidden');
  renderQuestion();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

function bindEvents() {
  els.drawBtn.addEventListener('click', drawQuestion);
  els.revealBtn.addEventListener('click', revealAnswer);
  els.passBtn.addEventListener('click', drawQuestion);
  els.shuffleBtn.addEventListener('click', shuffleCurrentGame);
  els.fullscreenBtn.addEventListener('click', toggleFullscreen);
  els.startTimerBtn.addEventListener('click', startTimer);
  els.pauseTimerBtn.addEventListener('click', () => stopTimer('정지'));
  els.resetTimerBtn.addEventListener('click', resetTimer);
  els.addTeamBtn.addEventListener('click', addTeam);
  els.resetScoreBtn.addEventListener('click', resetScores);
  els.addQuestionBtn.addEventListener('click', addCustomQuestion);
  document.querySelectorAll('.person-size').forEach((button) => {
    button.addEventListener('click', () =>
      setPersonRoundSize(Number(button.dataset.size)),
    );
  });
  document.querySelectorAll('.person-region').forEach((button) => {
    button.addEventListener('click', () =>
      setPersonRegion(button.dataset.region),
    );
  });
  document.querySelectorAll('.person-difficulty').forEach((button) => {
    button.addEventListener('click', () =>
      setPersonDifficulty(button.dataset.difficulty),
    );
  });
  document.querySelectorAll('.proverb-size').forEach((button) => {
    button.addEventListener('click', () =>
      setProverbRoundSize(button.dataset.size),
    );
  });
  document.querySelectorAll('.proverb-difficulty').forEach((button) => {
    button.addEventListener('click', () =>
      setProverbDifficulty(button.dataset.difficulty),
    );
  });
  document.querySelectorAll('.four-size').forEach((button) => {
    button.addEventListener('click', () =>
      setFourRoundSize(button.dataset.size),
    );
  });
  document.querySelectorAll('.initial-size').forEach((button) => {
    button.addEventListener('click', () =>
      setInitialRoundSize(button.dataset.size),
    );
  });
  document.querySelectorAll('.preset').forEach((button) => {
    button.addEventListener('click', () =>
      setTimer(Number(button.dataset.time)),
    );
  });
  document.addEventListener('keydown', (event) => {
    const isTyping = ['INPUT', 'TEXTAREA'].includes(
      document.activeElement.tagName,
    );
    if (isTyping) return;

    if (event.key === ' ') {
      event.preventDefault();
      drawQuestion();
    }
    if (event.key.toLowerCase() === 'a') {
      revealAnswer();
    }
  });
}

function render() {
  renderTabs();
  renderPersonSettings();
  renderProverbSettings();
  renderFourSettings();
  renderInitialSettings();
  renderQuestion();
  renderTimer();
  renderScores();
}

Object.keys(games).forEach(buildDeck);
bindEvents();
render();
