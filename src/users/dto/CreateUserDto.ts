import { Transform } from 'class-transformer';
import { IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class CreateUserDto {
  @Transform((params) => {
    console.log(params);
    return params.value;
  })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  readonly name: string;

  @IsString()
  @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/)
  readonly password: string;
}
