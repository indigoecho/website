---
layout: page
title: "What's on"
---

## What's on

<div class="whats-on-events">
{% for event in site.data.events %}
<div class="whats-on-event">
  <h3>
    {% if event.url %}<a href="{{ event.url }}">{{ event.title }}</a>{% else %}{{ event.title }}{% endif %}
  </h3>
  {% if event.location %}
  <div class="event-location">
    {{ event.location }}
  </div>
  {% endif %}

  {% if event.date %}
  <div class="event-date">
    {{ event.date | date: "%a %-d %B" }}
  </div>
  {% endif %}

  <div class="event-programme">
  {% for item in event.programme %}
    <wbr><strong>{{ item.composer }}</strong> - {{ item.piece }}{% unless forloop.last %},{% endunless %}
  {% endfor %}
  </div>
</div>
{% endfor %}
</div>

<hr>

<div class="image-link-tiles tiles-3 clearfix">
  <a class="tile tile-venues" href="/venues/">
    <div class="caption">
      <h3>Venues</h3>
      <p>Find out about the venues we usually perform in</p>
    </div>
  </a>

  <a class="tile tile-past-concerts" href="/about-us/history/past-concerts/">
    <div class="caption">
      <h3>Past concerts</h3>
      <p>View details and posters from some of our past concerts</p>
    </div>
  </a>

  <a class="tile tile-concert-faqs" href="/concert-faqs/">
    <div class="caption">
      <h3>Concert FAQs</h3>
      <p>Get answers to your questions about concerts</p>
    </div>
  </a>
</div>

We perform six main concerts a year, with a Winter concert series, a Spring
concert series and a Summer concert. Each year one of our concerts also
includes a joint collaboration between the Chorus and one of either Sinfonia or
Symphony Orchestra. Concerts usually take place in the same venues (see [where
we perform](/venues/)), and are easily accessible from the centre of Edinburgh.

Tickets can be bought on the door, but we sell tickets in advance online and at
rehearsals. Prices are very reasonable, and we offer further concessions to
students and under-16s. Further booking options are available for larger
groups. Our concerts usually start at 7.30pm, with doors opening at 7pm.

We know that sometimes there is a lot to think about when attending a classical
concert, especially if it is your first, so we have compiled a list of
[frequently asked questions](/concert-faqs/).

You can also [like our facebook page](https://www.facebook.com/ed.music.society) for updates about our events and other information.
