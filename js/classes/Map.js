class Map
{
    constructor(name)
    {
        this.name = name || "default";
        this.tileMap = [[]]; // tableau de preset
        this.tileMap.fill(new Array().fill(0, 0, 2), 0, 2);
    }

    generate()
    {
        this.tileMap[1][1] = 1;

        while(this.tileMap[0][1] + this.tileMap[2][1] + this.tileMap[1][0] + this.tileMap[1][2] == 0)
        {
            this.tileMap[0][1] = Math.floor(Math.random() * 2);
            this.tileMap[2][1] = Math.floor(Math.random() * 2);
            this.tileMap[1][0] = Math.floor(Math.random() * 2);
            this.tileMap[1][2] = Math.floor(Math.random() * 2);
        }
        
        if(this.tileMap[0][1] || this.tileMap[1][0])
        {
            this.tileMap[0][0] = Math.floor(Math.random() * 2);
        }

        if(this.tileMap[1][0] || this.tileMap[2][1])
        {
            this.tileMap[2][0] = Math.floor(Math.random() * 2);
        }

        if(this.tileMap[0][1] || this.tileMap[1][2])
        {
            this.tileMap[0][2] = Math.floor(Math.random() * 2);
        }

        if(this.tileMap[1][2] || this.tileMap[2][1])
        {
            this.tileMap[2][2] = Math.floor(Math.random() * 2);
        }
    }
}