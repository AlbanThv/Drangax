class Entity
{
    constructor(name, health, damage, sprite)
    {
        this.name = name || "default";
        this.health = health || 0;
        this.isAlive = (this.health > 0 ? true : false);
        this.damage = damage || 0;
        this.sprite = sprite || "default path";
    }

    takeDamage(damage)
    {
        this.health -= damage;
        if(this.health <= 0)
        {
            this.die();
        }
    }

    die()
    {
        this.isAlive = false;
        this.sprite = null;
    }

    move()
    {
        //
    }

    hit()
    {
        //
    }
}