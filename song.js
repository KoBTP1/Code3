var sound = new Howl({
    src: ['background.mp3'], // Đường dẫn đến file nhạc
    loop: true, // Phát lại nhạc liên tục
    pool: 10, // Tăng giới hạn audio pool
    onload: function() {
        console.log('Audio loaded successfully!');
        playsong(); // Gọi hàm phát nhạc ngay khi âm thanh được tải xong
    },
    onplayerror: function(id, error) {
        console.error('Play error:', error);
        sound.once('unlock', function() {
            sound.play(); // Thử phát lại khi được unlock
        });
    }
});

// Hàm phát nhạc
function playsong() {
    if (!sound.playing()) { // Kiểm tra nếu nhạc chưa được phát
        sound.play();
    }
}
