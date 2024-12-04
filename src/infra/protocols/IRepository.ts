export interface IRepository {
  listOne?<Input = { id: string }, Output extends object = {}>(
    input: Input,
  ): Promise<Output>;
  listAll?<Input = unknown, Output = unknown>(input: Input): Promise<Output>;
  createOne?<Input = unknown, Output = unknown>(input: Input): Promise<Output>;
  createMany?<Input = unknown, Output = unknown>(input: Input): Promise<Output>;
}
