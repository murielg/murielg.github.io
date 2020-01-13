---
path: "/blog/kotlin_nullability"
slug: "kotlin-nullability"
title: "Nullability and Null Safety in Kotlin"
date: 2020-01-13
tags: ['kotlin']
---

Coming from a Java background, like most Android devs, it is such a relief to work with Kotlin’s type system.
`NullPointerException` hell is something I am very happy to do away with as I get more comfortable with working safely with Kotlin.


```kotlin
val item: MediaItem? = null
item.print() // ❌ this won't compile 👎
```
When Trying to access a property like above, the compiler reports an error🎉
So in order to properly work with nullable types, we have some options:

### 1. Check for `null` - This is the same approach as we do so often in Java
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

### 3. With the elvis operator `?:`, we can assign a non-null value when our reference is of nullable type:
```kotlin
val myInt: Int? = null
// give alternative value in case myInt is null
val myLong: Long = myInt?.toLong() ?: 0L

// this is the equivalent to expression above
val myLong2 : Long = if (myInt != null) myInt else 0L
```

### 4. Lastly, we have the dreaded `!!` operator. ⚠️ This not-null assertion operator is really dangerous, so only use it if when…
<div style="width:100%;height:0;padding-bottom:82%;position:relative;"><iframe src="https://giphy.com/embed/KhliiAkDFP9YY" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/KhliiAkDFP9YY">via GIPHY</a></p>

```kotlin
// 😡😡😡
val item: MediaItem? = null
item!!print() // 😾 will throw exception if value is null

```

Thanks for reading!



You can learn more about null safety in Kotlin here [Null safety - Kotlin Programming Language](https://kotlinlang.org/docs/tutorials/kotlin-for-py/null-safety.html)
