// 캔버스와 펜
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

// 공 만들기
let x = canvas.width /2;    // 480/2 = 240
let y = canvas.height -30;  // 250-30 = 220
let ballRadius = 10;    // 원의 반지름 = 10
let dx=2;
let dy=-2;

// 패들(막대)
let paddleHeight = 5;
let paddleWidth = 80;
let paddleX = (canvas.width - paddleWidth)/2;   // 시작점
let leftPressed = false;    // 방향키 <=
let rightPressed = false;   // 방향키 =>

// 벽돌
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetLeft = 30;       // 캔버스로부터 (0,30) 이동
let brickOffsetTop = 30;        // 캔버스로부터 (30,0) 이동
let bricks = [];

for(let c = 0; c < brickColumnCount; c++){
    bricks[c] = [];
    for(let r=0; r<brickRowCount; r++){
        bricks[c][r] = {x:0, y:0, status:1}     // 기본값   // status : 충돌 event 위해 속성 추가
    }
}

console.log(bricks)

// 점수
let score = 0;

// 횟수
let lives = 3;

// 벽돌 그리기
function drawBricks(){

    for(let c=0; c< brickColumnCount; c++){
        for(let r=0; r<brickRowCount; r++){
            let brick = bricks[c][r];

            // c, r 곱하는 이유 : 몇 행과 몇 열인지
            // brickOffsetLeft,Top을 항상 더해야하는 이유 : 기준점(시작점)때문
            brick.x = c *(brickWidth + brickPadding) + brickOffsetLeft;
            brick.y = r *(brickHeight + brickPadding) + brickOffsetTop;

            if(brick.status === 1){     // brick.status===1일 때만 그린다.  
                ctx.beginPath();
                ctx.rect(brick.x, brick.y, brickWidth, brickHeight);
                ctx.fillStyle='#333';
                ctx.fill();
                ctx.closePath();

                // 공이 벽돌에 충돌했을 때
                // === 공의 중심이 벽돌 안에 있을 때
                if(
                    x> brick.x
                    && x< brick.x + brickWidth
                    && y> brick.y
                    && y< brick.y + brickHeight
                ){
                    dy=-dy;     // < 진행방향 > x:그대로, y:반대로 바뀐다
                    
                    // 벽돌이 비활성화된다 
                    brick.status = 0;
                    score++;

                    // 게임 종료
                    if(score === brickColumnCount *brickRowCount){
                        alert("YOU WIN");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

// 키를 누를 때
document.addEventListener('keydown', (e)=>{
    console.log('keydown', e.key);

    if(e.key === "ArrowRight"){
        rightPressed = true;
    }
    if(e.key==="ArrowLeft"){
        leftPressed = true;
    }
})

// 키에서 손을 뗄 때
document.addEventListener('keyup', (e)=>{
    console.log('keyup', e.key);

    if(e.key === "ArrowRight"){
        rightPressed = false;
    }

    if(e.key === "ArrowLeft"){
        leftPressed = false;
    }
})

// 원 움직임 + 패들의 움직임
// 벽돌 : 함수를 따로 만들고, draw에서 호출하는 형식
function draw(){

    // 직사각형 내부를 지운다
    ctx.clearRect(0,0, canvas.width, canvas.height)

    ctx.beginPath();    // 그리기 시작
    // .arc: canvas에서 원을 그릴 수 있도록 해주는 메소드
    // arc(x,y,반지름,시작 각도 , 끝 각도 , 방향 설정)
    // Math.PI : 원주율 파이(3.14)
    ctx.arc(x, y, ballRadius, 0, Math.PI *2);
    ctx.fillStyle = '#333';
    ctx.fill();
    ctx.closePath();    // 그리기 끝

    // 패들 그리기
    ctx.beginPath();
    // .rect : 직사각형 그릴 때
    // rect(letf, top, width, height)
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = '#333';
    ctx.fill();
    ctx.closePath();

    // 벽돌 그리기 함수 호출
    drawBricks();

    // 점수 그리기
    ctx.font = '16px Arial';
    ctx.fillStyle='#333';
    ctx.fillText(`Score: ${score}`, 8, 20);

    // 횟수 그리기
    ctx.font = '16px Arial';
    ctx.fillStyle='#333';
    ctx.fillText(`Lives: ${lives}`, canvas.width-65, 20)

    // 방향키 조작
    if(leftPressed){    // 왼쪽 방향키를 눌렀을 때
        paddleX -= 6;

        if(paddleX <0){
            paddleX = 0;
        }
    }

    if(rightPressed){
        paddleX += 6;

        if(paddleX+paddleWidth > canvas.width){
            paddleX = canvas.width-paddleWidth;
        }
    }

    // 상단에 부딪혔을 때 (가로 맨 위 >> y == 0)
    if(y<0 + ballRadius){       // 공이 보일 수 있게
        dy = -dy;   // y부호 바꾸기 (진행 방향 반대로 바뀐다)
    }

    // 우측면에 부딪혔을 때 (가로 길이 x값 == canvas.width(480))
    if(x > canvas.width - ballRadius){ // 공이 보일 수 있게 ballRadius를 빼야한다
        dx = -dx;
    }
    // 왼쪽면에 부딪혔을 때
    if(x< 0 +ballRadius){
        dx= -dx
    }

    // 바닥에 부딪혔을 때
    if(y > canvas.height -ballRadius){ 
       
        // 볼이 패들 안으로 들어올 때 
        if(x> paddleX && x< paddleX+paddleWidth){
            dy=-dy
        }else{
            // 볼이 패들 밖으로 떨어질 때
            lives -=1;      // 횟수 감소

            // reset (초기화) === 볼 위치와 패들 위치 모두 초기화

            // 볼 위치 초기화
            x = canvas.width /2;
            y = canvas.height -30;
            // 볼 진행방향 초기화
            dx =2;
            dy = -2;    // === dy= -dy

            // 패들 위치 초기화
            paddleX = (canvas.width - paddleWidth) /2;

            if(lives === 0){    
                alert("Game Over");
                document.location.reload(); // 게임 재시작
            }  
            // 조건을 !lives로 한 경우
            // if(!lives){
            //     alert("Game Over")
            // }return document.location.reload();
        }
    }

    // 왼쪽 맨 끝 : 0,0 (시작점)
    // 오른쪽 맨 아래 : 480,250
    x += dx;
    y += dy;

}

setInterval(draw, 10);  // 0.01초마다 draw 함수 실행 >> x는 증가, y는 감소 >> 대각선 방향 