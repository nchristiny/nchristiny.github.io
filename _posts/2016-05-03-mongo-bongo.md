---
layout: post
title: Mongo Bongo
date: 2016-05-03
tags:
- noSQL
- MongoDB
- JavaScript
---

I really love the paradigm shift that happens when you start using new tools, and recently this happened to me with MongoDB. Here are a couple of gotchas that I wanted to document for my future self. <!-- more -->

From the incredibly rich and highly helpful documentation pages, "MongoDB is an open-source document database that provides high performance, high availability, and automatic scaling."[^fn-1]

MongoDB is a noSQL database, which means it is schema-less. This means no need for migrations. Incredible, I know. Records in MongoDB consist of documents in a BSON object format which are functionally identical to the JSON objects that we all know and love. 

I happened to use MongoDB in conjunction with a recent Rails project via the Ruby gem, Mongoid. Mongoid is "an ODM (Object-Document-Mapper) framework for MongoDB in Ruby,"[^fn-2] and it is also very well documented.[^fn-3]

Cool things that you can do with MongoDB include querying the database in JavaScript, nested attributes and whole slew of other nice things. 

It is obviously not the right choice for every project, and I don't think anyone is really claiming it to be, but what it does, it does extremely well. It is performant and scalable, did I mention it is well documented? That being said, there were a couple of subtleties that I noticed. 

## Gotcha #1
Anytime you drop the database and you had a document's field indexed, then that index would have to be created again before seeding. (A document field is like a SQL table column.) 

You would simply have to include this command in your workflow: 

{% highlight bash %}
$ rake db:mongoid:create_indexes
{% endhighlight %}

## Gotcha #2
MongoDB and by extension Mongoid uses the `_id` field as the analogue to the more familiar `id` in SQL tables. The `_id` field consists an ObjectId[^fn-4] hexadecimal that increments sequentially, but not one by one as we are used to with ordinary `id` attribute integers.

For example, a typical newly-created object on a new database could have the `_id` field of: 

{% highlight JSON linenos %}
_id: {
  $oid: "56d3320efc3868284b000000"
}
{% endhighlight %}


This was confusing, but after a while I started getting used to my URLs having a hexadecimal `:id` params. 

If you really, really need the `id` field automatically generated alongside the existing `_id` field, (and this is quite conceivable since most programs expect there to be an `id` field or column in a database), I used a workaround to insert them.

In Rails `config/initializers` folder, create a file called `mongoid.rb`:

{% highlight ruby linenos %}
module Mongoid
  module Document
    def as_json(options={})
      attrs = super(options)
      attrs["id"] = attrs["_id"].to_s
      attrs
    end
  end
end
{% endhighlight %}

This adds an additional field called `id` with the same hexadecimal value of `_id` to each new Mongoid document.

There are plenty of other avenues to explore with regard to MongoDB, and the above barely scratches the surface. These were just a couple of the issues that were new to me when I started exploring the exciting world of noSQL databases. 

[^fn-1]: [Mongo Docs](https://docs.mongodb.org/manual/introduction/)
[^fn-2]: [Mongoid](https://github.com/mongodb/mongoid)
[^fn-3]: [Mongoid Docs](https://docs.mongodb.org/ecosystem/tutorial/ruby-mongoid-tutorial/)
[^fn-4]: [ObjectId](https://docs.mongodb.org/manual/reference/method/ObjectId/)
