<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>간단한 챗봇</title>
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<style>
    #chat-container {
    width: 300px;
    margin: 20px auto;
    border: 1px solid #ccc;
    padding: 10px;
    height: 300px;
    overflow-y: scroll;
}
    #input-container {
    width: 300px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
}
    #user-input {
    margin-bottom: 5px;
}
</style>
</head>
<body>
function appendMessage(sender, message) {
    const messageElement = $('<div></div>').html(`<strong>${sender}:</strong> ${message}`);
    chatContainer.append(messageElement);
    chatContainer.scrollTop(chatContainer.prop('scrollHeight'));

    const data = {
        'level1': [
            {
                'name': '신발',
                'number': 1,
                'message': '<br>아래에서 주제를 선택해주세요:<p>',
                'level2': [
                    {
                        'name': '운동화',
                        'number': 1,
                        'message': '<br>저희 매장은 Nike 전문 매장입니다. 상세정보를 보여드립니다.<p>'
                    },
                    {
                        'name': '구두',
                        'number': 2,
                        'message': '<br>저희 매장은 수제구두 전문 매장입니다. 상세정보를 보여드립니다.<p>'
                    },
                    {
                        'name': '샌들',
                        'number': 3,
                        'message': '<br>저희 매장은 고급 샌들 전문 매장입니다. 상세정보를 보여드립니다.<p>'
                    },
                ]
            },
            {
                'name': '의류',
                'number': 2,
                'message': '<br>아래에서 주제를 선택해주세요:<p>',
                'level2': [
                    {
                        'name': '여성의류',
                        'number': 1,
                        'message': '<br>저희 매장은 지그재그 재휴 매장입니다. 상세정보를 보여드립니다.<p>'
                    },
                    {
                        'name': '남성의류',
                        'number': 2,
                        'message': '<br>저희 매장은 정장 전문 매장입니다. 상세정보를 보여드립니다.<p>'
                    },
                    {
                        'name': '유아의류',
                        'number': 3,
                        'message': '<br>저희 매장은 아가방 전문 매장입니다. 상세정보를 보여드립니다.<p>'
                    },
                ]
            }
        ]
    };

    function appendMessage(sender, message) {
        const messageElement = $('<div></div>').html(`<strong>${sender}:</strong> ${message}`);
        chatContainer.append(messageElement);
        chatContainer.scrollTop(chatContainer.prop('scrollHeight'));
    }

    function showWelcomeMessage() {
        let message = '<br>코드랩 쇼핑몰에 오신 것을 환영합니다.' +
            '<br>저희 쇼핑몰은 신발, 의류 전문몰입니다.' +
            '<br>아래 주제에 대해서 문의해주세요.<p>';

        // 데이터 객체에서 카테고리 정보를 가져와서 메시지에 추가
        data.level1.forEach(function (category) {
            message += ` ${category.number}. ${category.name}<br>`;
        });

     //   console.log('message:', message);
    appendMessage('<br>Chatbot', message);
    }

    showWelcomeMessage()
}
</script>
</body>
</html>
