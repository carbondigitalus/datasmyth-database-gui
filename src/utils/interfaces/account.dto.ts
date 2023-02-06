// NPM Modules
import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsString, IsArray, IsEnum, IsPhoneNumber } from 'class-validator';

// Custom Modules
import { AccountStatus, AccountType, AccountVerified, UserRole } from './../../utils/enums';

export class AccountDTO {
  @IsNotEmpty()
  id: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsPhoneNumber()
  phone: string;

  @IsEnum({
    type: 'enum',
    enum: UserRole,
    default: UserRole.Customer
  })
  userRole?: UserRole;

  @IsEnum({
    type: 'enum',
    enum: AccountStatus,
    default: AccountStatus.Active
  })
  accountStatus?: AccountStatus;

  @IsEnum({
    type: 'enum',
    enum: AccountType,
    default: AccountType.Veteran
  })
  accountType?: AccountType;

  @IsArray()
  @IsEnum({
    type: 'enum',
    enum: AccountVerified,
    default: AccountVerified.None
  })
  accountVerified?: AccountVerified[];

  @IsEnum({
    type: 'boolean',
    default: true
  })
  @IsBoolean()
  isActive: boolean;

  @IsDate()
  passwordChangedAt?: Date;

  @IsString()
  passwordResetToken?: string;

  @IsDate()
  passwordResetExpires?: Date;

  // virtual field for relations and join, not a real db field
  @IsArray()
  businessList?: any[];

  @IsArray()
  directoryList?: any[];

  @IsArray()
  nonprofitList?: any[];

  @IsArray()
  podcastList?: any[];
}
