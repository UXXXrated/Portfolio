---
layout: default
title: My Portfolio
---

<h1>My Portfolio</h1>
<p>Welcome to my UX design portfolio. Here you’ll find selected projects and case studies.</p>

<div class="portfolio-grid">
  {% for work in site.works %}
    <a class="portfolio-item" href="{{ work.url }}">
      {% if work.image %}
        <img src="{{ work.image }}" alt="{{ work.title }}" style="max-width:100%; border-radius:4px;">
      {% endif %}
      <h3>{{ work.title }}</h3>
      {% if work.description %}
        <p>{{ work.description }}</p>
      {% endif %}
    </a>
  {% endfor %}
</div>
