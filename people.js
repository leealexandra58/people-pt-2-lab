db.people.insertOne({ first_name: 'Allie', last_name: 'Lee', email: 'leeallie58@gmail.com', gender: 'Female', age: 32, state: 'Michigan', children: [] })
db.people.insertOne({ first_name: 'Melissa', last_name: 'Lee', email: 'mellee87@gmail.com', gender: 'Female', age: 35, state: 'Incheon', 'children': [{name: "Audrey", age: 6}, {name: "Isaac", age: 4}] })
db.people.updateOne({ first_name: 'Clarence' }, { $set: { state: 'South Dakota' } })
db.people.updateOne({ first_name: 'Rebecca' }, { $unset: { email: 1 } })
db.people.updateMany({ state: 'Missouri' }, { $inc: { age: 1 } })
db.people.replaceOne({ first_name: 'Jerry', last_name: 'Baker' }, { first_name: "Jerry", last_name: "Baker-Mendez", email: "jerry@classic.ly", gender:"Male", age: 28, state: "Vermont", "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] })
db.people.deleteOne({ first_name: 'Wanda', last_name: 'Bowman' })
db.people.deleteMany({ email: null })
db.submissions.insertMany([
    { title: "The River Bend", upvotes: 10, downvotes: 2, artist: ObjectId("6369c257172733fcc03eb45f") },
    { title: "Nine Lives", upvotes: 7, downvotes: 0, artist: ObjectId("6369c257172733fcc03eb48d") },
    { title: "Star Bright", upvotes: 19, downvotes: 3, artist: ObjectId("6369c257172733fcc03eb510") },
    { title: "Why Like This?", upvotes: 1, downvotes: 5, artist: ObjectId("6369c257172733fcc03eb496") },
    { title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: ObjectId("6369c257172733fcc03eb45d") },
])
db.submissions.updateOne({ title: "The River Bend" }, { $inc: { upvotes: 2 } })
db.submissions.updateMany({ upvotes: { $gt: 10 } }, { $set: { round2: true } })