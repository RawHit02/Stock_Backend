import { DynamicModule, Global, Module, Provider } from '@nestjs/common'
import { IMediator } from './imediator'
import { MediatorService } from './mediator.service'

@Global()
@Module({
	providers: [{ provide: IMediator, useClass: MediatorService }],
	exports: [{ provide: IMediator, useClass: MediatorService }],
})
export class MediatorModule {
	public static forRoot(mediators: Provider<IMediator>[]): DynamicModule {
		const dynamicModule: DynamicModule = {
			global: true,
			module: MediatorModule,
			providers: [...mediators],
			exports: [...mediators],
		}
		return dynamicModule
	}
}
