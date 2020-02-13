---
path: "/blog/kotlin_nullability"
slug: "kotlin-nullability"
title: "Null Safety in Kotlin"
date: 2020-01-13
tags: ['kotlin']
---

As an android dev, it is very enjoyable working with Kotlin’s type system. With Kotlin's nullability support, it becomes much easier to avoid the `NullPointerException` hell that is so common when developing in Java.

In this post, I will cover Kotlin's awesome built in null safety features and give some examples on how to use them.

In Kotlin, we declare a nullable type with a question mark `?`:

```kotlin
val item: MediaItem? = null
item.print() // ❌ this won't compile 👎
```
When accessing the property of a nullable variable, the compiler's type checker will report an error and the code just won't compile.

In order to properly test and work with nullable types, we have some options:

### 1. Check for `null`
This is the same approach as we do so often in Java
```kotlin
if (item != null) {
	item.print() // ✅ this is ok👌
}
```

### 2. Safe Call operator `?.`
Safe calls are very useful when chaining different calls together, or on the left side of an assignment.
```kotlin
val item: MediaItem? = null
item?.print() // ✅
```

### 3. The elvis operator `?:`
We can assign a non-null value when our reference is of nullable type:

```kotlin
val myInt: Int? = null
// give alternative value in case myInt is null
val myLong: Long = myInt?.toLong() ?: 0L

// this is the equivalent to expression above
val myLong2 : Long = if (myInt != null) myInt else 0L
```

### 4. The dreaded `!!` operator.
 ⚠️ This not-null assertion operator is really dangerous, so only use it when…
<div style="width:100%;height:0;padding-bottom:82%;position:relative;"><iframe src="https://giphy.com/embed/KhliiAkDFP9YY" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/KhliiAkDFP9YY">via GIPHY</a></p>

```kotlin
// 😡😡😡
val item: MediaItem? = null
item!!print() // 😾 will throw exception if value is null

```

Lastly, using `?.` allows us to throw different types of exceptions, however, `!!` will only be able to throw a `NullPointerException`


You can learn more about null safety in Kotlin here [Null safety - Kotlin Programming Language](https://kotlinlang.org/docs/tutorials/kotlin-for-py/null-safety.html)
