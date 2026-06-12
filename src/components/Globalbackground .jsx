import { useEffect, useRef } from 'react';

const GlobalBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width, height;
    let particles = [];
    let mouse = { x: null, y: null };

    const PARTICLE_COUNT   = 90;
    const CONNECTION_DIST  = 140;
    const MOUSE_REPEL_DIST = 100;
    const BASE_SPEED       = 0.35;
    const PARTICLE_COLOR   = '96, 165, 250';
    const LINE_COLOR       = '59, 130, 246';

    const resize = () => {
      width  = canvas.width  = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const createParticle = () => ({
      x:    Math.random() * width,
      y:    Math.random() * height,
      vx:   (Math.random() - 0.5) * BASE_SPEED,
      vy:   (Math.random() - 0.5) * BASE_SPEED,
      r:    Math.random() * 1.8 + 0.6,
      base: Math.random() * 0.45 + 0.15,
    });

    const init = () => {
      resize();
      particles = Array.from({ length: PARTICLE_COUNT }, createParticle);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (mouse.x !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_REPEL_DIST) {
            const force = (MOUSE_REPEL_DIST - dist) / MOUSE_REPEL_DIST * 0.012;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        p.vx = Math.sign(p.vx) * Math.min(Math.abs(p.vx), BASE_SPEED * 3);
        p.vy = Math.sign(p.vy) * Math.min(Math.abs(p.vy), BASE_SPEED * 3);

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width)  p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${PARTICLE_COLOR}, ${p.base})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${LINE_COLOR}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    const onMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onMouseLeave = ()  => { mouse.x = null;      mouse.y = null; };
    const onResize = () => {
      resize();
      particles.forEach(p => {
        p.x = Math.min(p.x, width);
        p.y = Math.min(p.y, height);
      });
    };

    init();
    draw();

    window.addEventListener('mousemove',  onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize',     onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove',  onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize',     onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
      aria-hidden="true"
    />
  );
};

export default GlobalBackground;