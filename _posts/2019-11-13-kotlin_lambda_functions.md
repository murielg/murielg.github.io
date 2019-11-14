---
layout: post
title: "Lambda Functions in Kotlin"
date: 2019-11-13
---

Lambda functions are anonymous functions that can be assigned to a variable and passed around like any other value.  Lambdas are super useful and convenient as they allow you to write a less code, while also improving the readability of your codebase by removing extra boilerplate. 

```kotlin

val add: (Int, Int) -> Int = { x, y -> x + y }

val addition = { x, y : -> x + y }

```

The two lambdas above take in two `Int` parameters and return an `Int`. 
The second lambda takes advantage of type inference, and can be even shorter. 

If a lambda only takes in 1 parameter, you can shorten it further by using the reserved `it`  keyword: 
```kotlin

val double = { 2 * it }

val square = { it * it }

```

Using lambdas allow us to simplify more complex functions. Wihout lambda: 
```kotlin
interface Callback {
  fun onCallback(result: String)
}

fun doAsync(x : Int, callback: Callback) {
  callback.onCallback("done")
}

doAsync(20, object : Callback {
  override fun onCallback(result: String) {
    print(result)
  }
}
```

With lambda:
```kotlin
fun doAsync (x : Int, callback: (String) -> Unit) {
  callback("done")
}

doAsync(20) { result -> print(result)}
```

Iterating over collections also becomes really easy with the help of lambdas: 
```kotlin

var allItems = listOf(1.99, 2.50, 7.49, 9.99, 25.0)

val priceyItems = prices.filter { it > 5.0 } 

```

Lambdas can help in making your codebase more reusable, succint and easier to mantain. 

To learn more about Lambdas see [Higher-Order Functions and Lambdas - Kotlin Programming Language](https://kotlinlang.org/docs/reference/lambdas.html)
