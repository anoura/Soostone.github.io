---
layout: page
title: About
permalink: /about/
---

# Napkin

## Intro
Napkin Wiki is a collection of HOWTOs and tutorials about the tool
assisting data scientists when they crunch data through their relational and NoSQL DBs.

[napkinweb](https://napkinweb.webflow.io/){:target="_blank" rel="noopener"}

## About Napkin app
What is napkin? It is a few things bundled together:

1. A SQL wrapper in Haskell geared towards Redshift and therefore
   Postgres.

    * The general idea is to be able to express any hand-written SQL,
      no matter how complex, directly in Haskell via types and a
      structure that mirror SQL directly.

    * The Untyped folder coupled with Napkin.Types has all the
      types and operations to represent SQL expresions - i.e. the
      columns in a SQL query.

    * The Render folder is all about (pretty)printing queries into their
      final SQL form.


    * The Untyped.Monad module provides a simple monadic interface to
      constructing queries.

2. A SQL runner with some basic support for running queries on
   Postgres and Redshift.


3. A Spec orchestrator that allows for expression of chains of
   table/view creations, updates and re-creations with
   interdependencies that are automatically managed.


    * Entire SQL based computation pipelines can be expressed this way
      and have their periodic updates managed automatically by the
      framework.


    * Specs are necessarily stateful; we currently persist metadata in
      a local sqlite3 database, which can be migrated to a more serious
      database solution.

4. A command line interface that can take Specs and provide
   convenient flags for forcing certain table updates, skipping
   others, etc.

## Key features

* Unused CTE column detection.
* Transparent support multiple SQL-like backends (Postgres, BigQuery, Redshift)
* Powerful template engine available in SQL queries
* Seamless integration macro functions with SQL
* Capabilities are extensible with type safest generic programming
  language.

## Let's Go

[Go! Go! Go!](/getting-started)





<!--- [jekyll-organization]: https://github.com/jekyll --->
