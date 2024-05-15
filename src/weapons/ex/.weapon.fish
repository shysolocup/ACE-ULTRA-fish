# fish programming language developed by shysolocup
# https://github.com/ReRand/ACE-ULTRA-fish


Name = "ExampleGun",
Id = NewId(),


Type = Gun(
    Damage = 5,
    HeadshotDamage = 100,
    Behavior = Pierce,
    FireRate = 2,

    ShotSound = Sound(
        Id = "rbxassetid://id",
        Volume = 0.7
    )
)