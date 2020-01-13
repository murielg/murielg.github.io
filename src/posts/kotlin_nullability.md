---
path: "/blog/kotlin_nullability"
slug: "kotlin-nullability"
title: "Nullability and Null Safety in Kotlin"
date: 2020-01-13
tags: ['kotlin']
---

Coming from a Java background,like most Android devs, it is such a relief to work with Kotlin’s type system.
`NullPointerException` os NPE hell is something I am very happy to do away with as I get more used to working with Kotlin.

If we want to access a property, the compiler reports an error:
```kotlin
val item: MediaItem? = null
item.print() // ❌ this won't compile 👎
```

In order to access properties on nullable types, Kotlin gives us some options:

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
val myLong: Long = myInt?.toLong() ?: 0L // give alternative value in case myInt is null
val myLong2 : Long = if (myInt != null) myInt else 0L // equivalent to expression above
```

### 4. Lastly, we have the dreaded `!!` operator. ⚠️ This not-null assertion operator is really dangerous, so only use it if when…
<div style="width:100%;height:0;padding-bottom:82%;position:relative;"><iframe src="https://giphy.com/embed/KhliiAkDFP9YY" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/KhliiAkDFP9YY">via GIPHY</a></p>

```kotlin
// 😡😡😡
val item: MediaItem? = null
item!!print() // 😾 will throw exception if value is null

```

Learn more about null safety in Kotlin here [Null safety - Kotlin Programming Language](https://kotlinlang.org/docs/tutorials/kotlin-for-py/null-safety.html)
