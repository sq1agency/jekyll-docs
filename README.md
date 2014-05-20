jekyll-docs
===========

Short example of using jekyll for documentation

TL;DR

`sudo gem install jekyll`
`git clone git@github.com:sq1agency/jekyll-docs.git`
`jekyll serve --watch`

##Install Jekyll

To start using Jekyll install the gem `sudo gem install jekyll` or follow the instructions on [Jekyll](http://jekyllrb.com/docs/installation/).

##Setup Jekyll

`git clone git@github.com:sq1agency/jekyll-docs.git` where you want to install this setup.

##Configure Jekyll

After you have cloned the repo down, open the `_config.yml` file to config the documentation app for your needs. For more on configuring your jekyll site go [here](http://jekyllrb.com/docs/configuration/).

Create your `category-list` items that you are going to be using for your documentation. (i.e. `category-list: [cats, dogs]`)

##Create New Categories

In the documentation folder, make new folders for each of your category-list items and put an `index.md` file in them as well as any item that is in that category as a document. (i.e. `/dogs/beagles.md`)

On the individual category pages that you have made, you will need the following at the top of each one.

```markdown
---
layout: page
title: "Beagle Dogs"
page_title: "beagle"
resource: true
categories: [dogs]
---
```

Where `title` is the title on the page, `page_title` is the link text used, `resource` defines it as a child to a category parent and `categories` defines what parent it belongs to.

##Run Jekyll

Run `jekyll serve --watch` to create a local web server to view your site.
