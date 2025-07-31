# 🌐 What is CSS?

CSS stands for **Cascading Style Sheets**. It is a stylesheet language used to describe the presentation (look and feel) of HTML documents. While HTML provides the structure of a web page, CSS controls the visual appearance — things like colors, fonts, spacing, layouts, and animations.

---

## 🛠️ CSS Syntax

**Syntax:**

```css
selector {
  property: value;
}
```

**Example:**

```css
p {
  color: blue;
  font-size: 16px;
}
```

---

## 📦 Types of CSS

| Type         | Description                            | Example                                                  |
| ------------ | -------------------------------------- | -------------------------------------------------------- |
| Inline CSS   | Written inside HTML elements           | `<p style="color: red;">Hello</p>`                       |
| Internal CSS | Defined in a `<style>` tag in `<head>` | `<style> body { background-color: lightgrey; } </style>` |
| External CSS | Linked via an external file            | `<link rel="stylesheet" href="style.css">`               |

---

## 🔍 CSS Selectors

**HTML Example:**

```html
<h1 id="title">Welcome to My Website</h1>
<div class="card">
  <p>This is a card description.</p>
</div>
```

**CSS Example:**

```css
/* Universal selector */
* {
  box-sizing: border-box;
}

/* Element selector */
h1 {
  color: darkblue;
}

/* ID selector */
#title {
  text-align: center;
  font-size: 32px;
}

/* Class selector */
.card {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  background-color: #f9f9f9;
}
```

---

## 🎨 1. Color & Background

| Property              | Description                                 | Example                            |
| --------------------- | ------------------------------------------- | ---------------------------------- |
| `color`               | Sets the text color                         | `color: red;`                      |
| `background-color`    | Sets the background color                   | `background-color: lightblue;`     |
| `background-image`    | Adds an image as the background             | `background-image: url('bg.jpg');` |
| `background-repeat`   | Controls whether a background image repeats | `background-repeat: no-repeat;`    |
| `background-size`     | Controls the size of the background image   | `background-size: cover;`          |
| `background-position` | Sets the position of the background image   | `background-position: center;`     |

---

## ✍️ 2. Text & Font

| Property          | Description                                | Example                          |
| ----------------- | ------------------------------------------ | -------------------------------- |
| `font-family`     | Sets the typeface of the text              | `font-family: 'Georgia', serif;` |
| `font-size`       | Controls the size of the text              | `font-size: 16px;`               |
| `font-weight`     | Sets the thickness (e.g. normal, bold)     | `font-weight: bold;`             |
| `font-style`      | Makes text italic or normal                | `font-style: italic;`            |
| `text-align`      | Aligns text (left, center, right, justify) | `text-align: justify;`           |
| `text-decoration` | Adds underline, overline, etc.             | `text-decoration: underline;`    |
| `text-transform`  | Controls uppercase, lowercase, capitalize  | `text-transform: uppercase;`     |
| `letter-spacing`  | Adjusts spacing between letters            | `letter-spacing: 2px;`           |
| `line-height`     | Sets vertical space between lines of text  | `line-height: 1.5;`              |

---

## 📐 3. Box Model (Spacing & Sizing)

| Property     | Description                             | Example                      |
| ------------ | --------------------------------------- | ---------------------------- |
| `width`      | Sets the width of an element            | `width: 300px;`              |
| `height`     | Sets the height of an element           | `height: 150px;`             |
| `padding`    | Space inside the border                 | `padding: 20px;`             |
| `margin`     | Space outside the border                | `margin: 30px auto;`         |
| `border`     | Adds a border around an element         | `border: 2px solid #007bff;` |
| `box-sizing` | Defines how width/height are calculated | `box-sizing: border-box;`    |

---

## 📦 4. Layout & Positioning

| Property            | Description                                                    | Example                  |
| ------------------- | -------------------------------------------------------------- | ------------------------ |
| `display`           | Controls element type (block, inline, flex)                    | `display: flex;`         |
| `position`          | Positioning method (static, relative, absolute, fixed, sticky) | `position: absolute;`    |
| `top`, `left`, etc. | Offsets for positioned elements                                | `top: 10px; left: 20px;` |
| `z-index`           | Layer order (higher = in front)                                | `z-index: 5;`            |
| `overflow`          | Handles overflow (hidden, scroll, auto)                        | `overflow: hidden;`      |

---

## 🎯 5. Flexbox (for layout)

| Property          | Description                                         | Example                           |
| ----------------- | --------------------------------------------------- | --------------------------------- |
| `display: flex`   | Enables Flexbox layout                              | `display: flex;`                  |
| `justify-content` | Horizontal alignment (start, center, space-between) | `justify-content: space-between;` |
| `align-items`     | Vertical alignment                                  | `align-items: center;`            |
| `flex-direction`  | Row or column layout                                | `flex-direction: row;`            |

---

## 🖱️ 6. Interactivity & Effects

| Property         | Description                              | Example                                  |
| ---------------- | ---------------------------------------- | ---------------------------------------- |
| `cursor`         | Changes the cursor (e.g., pointer, move) | `cursor: pointer;`                       |
| `transition`     | Smoothly animates changes                | `transition: all 0.3s ease;`             |
| `transform`      | Rotates, scales, or moves elements       | `transform: scale(1.1);`                 |
| `box-shadow`     | Adds shadow around elements              | `box-shadow: 0 4px 8px rgba(0,0,0,0.2);` |
| `opacity`        | Makes element semi-transparent           | `opacity: 0.7;`                          |
| `hover`, `focus` | Pseudo-classes for user interaction      | `a:hover { color: blue; }`               |

---

## ✅ A Simple Page

### 📄 `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1 id="title">Hello CSS World</h1>
  <div class="card">
    <p>This card demonstrates CSS selectors, colors, background, text styles, fonts, and the box model.</p>
  </div>
</body>
</html>
```

### 🎨 `style.css`

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Background */
body {
  background: linear-gradient(to right, #e0f7fa, #fff);
  font-family: Arial, sans-serif;
}

/* Title Styling */
#title {
  text-align: center;
  margin-top: 40px;
  font-size: 36px;
  color: #00695c;
}

/* Card Styling */
.card {
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #ffffff;
  border: 2px solid #80cbc4;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Text Styling */
.card p {
  font-size: 18px;
  color: #333;
  line-height: 1.6;
  text-align: justify;
}
```

---

