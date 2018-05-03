import Entity from "./Entity.js";

class Player extends Entity
{
    constructor(name, health, damage, sprite)
    {
        super(name, health, damage, sprite);
    }

    move(direction)
    {
        switch (direction) {
            case "UP":
                // Des trucs
                break;
            case "DOWN":
                // Des trucs
                break;
            case "LEFT":
                // Des trucs
                break;
            case "RIGHT":
                // Des trucs
                break;
            
            default:
                break;
        }
    }

    hit(entity)
    {
        entity.takeDamage(this.damage);
    }
}