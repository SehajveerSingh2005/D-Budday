document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('.media-video');

  videos.forEach(video => {
    const container = video.parentElement;

    container.addEventListener('mouseenter', () => {
      video.play(); // Start playing video
    });

    container.addEventListener('mouseleave', () => {
      video.pause(); // Pause video
    });
  });
});

  