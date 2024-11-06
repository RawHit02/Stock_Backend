import { IntegrationEvent } from './integration.event';

/**
 * External integration event handler needs to implement this
 *
 * @export
 * @interface IIntegrationEventHandler
 * @template TIntegrationEvent
 */
export interface IIntegrationEventHandler {
  /**
   * Handle event
   *
   * @param {TIntegrationEvent} event The integration event record
   * @returns {Promise<IIntegrationEventHandlerResponse>} Handler response object
   * @memberof IIntegrationEventHandler
   */
  handle(event: IntegrationEvent): Promise<IIntegrationEventHandlerResponse>;
}

export interface IIntegrationEventHandlerResponse {
  /**
   * Boolean indicating if the event message cannot be consumed and should be routed to DLQ
   */
  handled: boolean;
  /**
   * If unable to handle, specify the reason why message is not in a consumable stage
   */
  unHandledReason?: string;
}
