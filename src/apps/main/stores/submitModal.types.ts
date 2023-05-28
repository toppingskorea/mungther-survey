export type SubmitModalInitialState = {
  isOpen: boolean;
};

export interface SubmitModalState extends SubmitModalInitialState {
  onOpen: VoidFunction;
  onClose: VoidFunction;
}
