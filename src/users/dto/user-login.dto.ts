import { Transform } from 'class-transformer';

export class UserLoginDto {
  @Transform((params) => {
    console.log(params);
    return params.value;
  })
  name: string;
  password: string;
}
