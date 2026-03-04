"use client";

import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";
/**
 * CollapseTransition - Expand / collapse animation container
 *
 * Custom component
 * Theme: N/A (pure animation utility)
 *
 * Supports vertical (height) and horizontal (width) animations via
 * grid-template-rows/columns, with optional opacity transition.
 *
 * @example
 * <CollapseTransition
 *   open={isOpen}
 *   direction="vertical"
 *   opacityTransition
 *   duration={300}
 *   keepMounted
 * >
 *   <YourContent />
 * </CollapseTransition>
 *
 * 参数说明：
 * - open: boolean
 *   控制内容是否展开（true 展开，false 收起）
 *
 * - children: ReactNode
 *   要被包裹的内容
 *
 * - direction?: "vertical" | "horizontal"
 *   展开方向，vertical 为纵向（高度），horizontal 为横向（宽度），默认 "vertical"
 *
 * - duration?: number
 *   动画时长（毫秒），默认 300ms
 *
 * - opacityTransition?: boolean
 *   是否开启透明度渐变动画（默认 false）
 *
 * - keepMounted?: boolean
 *   是否在收起状态下仍然保留 children 的挂载状态（默认 false）。
 *   - false：收起动画结束后卸载 children（默认行为）
 *   - true：仅隐藏内容，不卸载 children，内部状态将被保留
 *
 * 工作原理：
 * - vertical: open = true → grid-rows 从 0fr 过渡到 1fr
 * - horizontal: open = true → grid-cols 从 0fr 过渡到 1fr
 * - open = false → 从 1fr 过渡到 0fr，动画结束后卸载内容
 *
 * 注意事项：
 * 1. 布局冲突：**父容器不应使用 Flex 或 Grid 的 `gap` 属性**。
 *    原因：当 CollapseTransition 收起（尺寸为 0）时，父容器的 `gap` 仍会将其视为一个子项，
 *    在其前后插入间隔，导致视觉上出现双倍间距 (`gap + 0px + gap`)。
 *
 * 2. 推荐做法：若需要间距，请移除父容器的 `gap`，转而在 CollapseTransition 内部的 children 上
 *    或相邻的兄弟元素上使用 `margin-bottom/margin-right` 等属性来控制间距。
 *
 * 3. 卸载机制：children 在收起动画结束后才会被卸载，以确保动画流畅，避免闪跳。
 */

type Props = {
  open: boolean;
  children: React.ReactNode;
  duration?: number;
  opacityTransition?: boolean;
  className?: string;
  /**
   * "vertical" = Vertical expansion (height)
   * "horizontal" = Horizontal expansion (width)
   * "down" = Normal expansion (Top -> Bottom)
   * "up" = Reverse expansion (Bottom -> Top)
   */
  direction?: "vertical" | "horizontal" | "up" | "down";
  keepMounted?: boolean;
};

const CollapseTransition: React.FC<Props> = ({
  open,
  children,
  duration = 300,
  opacityTransition = false,
  className,
  direction = "down", // Default to normal behavior
  keepMounted = false,
}) => {
  const [isRendered, setIsRendered] = useState(open);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (open) setIsRendered(true);
  }, [open]);

  const handleTransitionEnd = useCallback(() => {
    if (!open && !keepMounted) setIsRendered(false);
  }, [open, keepMounted]);

  const isVertical =
    direction === "vertical" || direction === "down" || direction === "up";
  const isUp = direction === "up";

  return (
    <div
      className={cn(
        "grid",
        {
          // Vertical direction
          "grid-rows-[1fr]": isVertical && open,
          "grid-rows-[0fr]": isVertical && !open,
          // Horizontal direction (with h-full to work in flex containers)
          "grid-cols-[1fr] h-full": !isVertical && open,
          "grid-cols-[0fr] h-full": !isVertical && !open,
          // Opacity
          "opacity-100": opacityTransition && open,
          "opacity-0": opacityTransition && !open,
          // Transitions
          "transition-[grid-template-rows,opacity]":
            opacityTransition && isVertical,
          "transition-[grid-template-rows]": !opacityTransition && isVertical,
          "transition-[grid-template-columns,opacity]":
            opacityTransition && !isVertical,
          "transition-[grid-template-columns]":
            !opacityTransition && !isVertical,
          // Rotate for 'up' direction
          "rotate-180": isUp,
        },
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      <div
        className={cn("overflow-hidden", {
          "rotate-180": isUp,
          "h-full": !isVertical,
        })}
      >
        {(isRendered || keepMounted) && children}
      </div>
    </div>
  );
};

export default CollapseTransition;
