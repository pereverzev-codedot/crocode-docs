interface IEmojiIcon {
  size?: string;
  id: string | null;
  shortcodes?: string;
  fallback?: string;
}

const EmojiIcon = ({ id, size, fallback }: IEmojiIcon) => (
  //@ts-ignore
  <em-emoji id={id} size={size} fallback={fallback} />
);

export default EmojiIcon;
