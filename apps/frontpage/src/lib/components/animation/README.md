# Animation Components

This directory contains animation components specific to my-app for creating engaging user experiences.

## 🎭 Components

### 🌊 Parallax Component

Creates smooth scroll-based animations that move elements at different speeds relative to the user's scroll position.

**Features:**
- Multiple directions (up, down, left, right)
- Variable speed controls (slow, medium, fast, custom)
- Performance optimized with Intersection Observer
- Configurable viewport offsets

**Usage:**
```svelte
<script>
  import { Parallax } from '$lib/components/animation';
</script>

<Parallax direction="up" speed="medium">
  <img src="/hero-image.jpg" alt="Hero" />
</Parallax>
```

### ✨ WordByWordReveal Component

Animates text by revealing words one by one with various visual effects.

**Features:**
- 9 different animation types (fade, slide, scale, blur, rotate)
- Flexible timing controls
- Multiple trigger options (intersection, immediate, manual)
- Repeating animations
- Event callbacks

**Usage:**
```svelte
<script>
  import { WordByWordReveal } from '$lib/components/animation';
</script>

<WordByWordReveal 
  text="Your amazing headline text here"
  animation="slide-up"
  speed="medium"
  trigger="intersection"
/>
```

## 🚀 Combined Example

Both components work great together for creating immersive landing pages:

```svelte
<script>
  import { Parallax, WordByWordReveal } from '$lib/components/animation';
</script>

<section class="hero-section">
  <Parallax direction="up" speed="slow">
    <div class="background-element" />
  </Parallax>
  
  <WordByWordReveal 
    text="Welcome to the Future of Web Design"
    animation="slide-up"
    speed="medium"
    trigger="intersection"
    css={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center' }}
  />
</section>
```

## 🔧 Technical Details

Both components:
- Use modern web APIs (Intersection Observer, requestAnimationFrame)
- Are built with performance in mind
- Support TypeScript out of the box
- Follow accessibility best practices
- Integrate seamlessly with Panda CSS

## 📍 Location

These components are specific to the `my-app` application and are located in:
- **Parallax**: `src/lib/components/animation/parallax/`
- **WordByWordReveal**: `src/lib/components/animation/word-by-word-reveal/`

## 📚 Documentation

Full component documentation with examples is available in the individual component directories:
- `parallax/parallax.mdx`
- `word-by-word-reveal/word-by-word-reveal.mdx`