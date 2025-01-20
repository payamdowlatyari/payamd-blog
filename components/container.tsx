type ContainerProps = {
  children: React.ReactNode;
};

/**
 * A container component that centers its children horizontally
 * and adds a max-width and padding.
 *
 * @example
 * <Container>
 *   <div>Content</div>
 * </Container>
 *
 * @param {Object} props
 * @param {ReactNode} props.children - The content to be rendered inside the container
 */
export default function Container({ children }: ContainerProps) {
  return <div className="max-w-8xl mx-auto p-4">{children}</div>;
}
