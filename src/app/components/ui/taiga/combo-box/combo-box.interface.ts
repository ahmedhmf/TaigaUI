export type ComboBox = {
  label?: string;
  placeHolder?: string;
  items: ComboBoxItem[];
};

export type ComboBoxItem = {
  id: number | string;
  label: string;
};
