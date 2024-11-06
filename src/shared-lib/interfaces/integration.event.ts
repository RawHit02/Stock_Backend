import { eDataActionType } from '../constants';
import { IdentifierUtils } from '../utils';

export interface IIntegrationEventProps {
  id?: string;
  correlationId: string;
  topic: string;
  actionType?: eDataActionType | null;
  eventSource?: string | null;
  eventName?: string;
  creationDateTime?: Date;
}
export class IntegrationEvent<Payload = any | Record<string, any>> {
  //#region private members
  protected id: string;
  protected creationDateTime: Date;
  protected topic: string;
  protected actionType: eDataActionType;
  protected eventSource: string;
  protected eventName: string;
  protected payload: Payload;
  protected correlationId: string;
  //#endregion

  //#region constructor
  public constructor(props: IIntegrationEventProps) {
    Object.assign(this, props);
    if (!this.id) this.id = IdentifierUtils.generateUUID();
    if (!this.creationDateTime) this.creationDateTime = new Date();
    if (!this.eventName) this.eventName = this.constructor.name.replace('IntegrationEvent', 'Event');

  }
  //#endregion

  //#region properties
  public getId() {
    return this.id;
  }
  public getCreationDateTime() {
    return this.creationDateTime;
  }
  public getTopic() {
    return this.topic;
  }
  public getActionType() {
    return this.actionType;
  }
  public getEventName() {
    return this.eventName;
  }
  public getEventSource() {
    return this.eventSource;
  }
  public getPayload(): Readonly<Payload> {
    return this.payload;
  }
  public getCorrelationId() {
    return this.correlationId;
  }
  //#endregion
}
