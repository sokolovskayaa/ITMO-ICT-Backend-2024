import Repository from 'sequelize-typescript';
import sequelize from '../config/db';
import { Solution } from '../model/solution';


export class SolutionRepository {
    private repository = sequelize.getRepository(Solution);

    async findById(id: number): Promise<Solution | null> {
        const solution = await this.repository.findByPk(id);
        return solution;
    }

    async patch(id: number, solution: Solution): Promise<Solution | null>{
        let db_solution = await this.repository.findByPk(id);
        db_solution = solution;
        await db_solution.save();
        return db_solution;
    }

    async post(solutin: Solution): Promise<Solution | null> {
        const new_solution = await this.repository.create(JSON.parse(JSON.stringify(solutin)));
        return new_solution;
    }
}