using System;
using System.Collections.Generic;
using System.Text;

namespace DarkId.Papyrus.LanguageService.Syntax.InternalSyntax
{
    internal abstract class GreenNodeVisitorBase<T> : IGreenNodeVisitor<T>
    {
        public T Visit(ExpressionSyntax node)
        {
            return default;
        }

        public T Visit(GreenNode node)
        {
            return default;
        }
    }

    internal abstract class GreenNodeVisitorBase : IGreenNodeVisitor
    {
        public void Visit(ExpressionSyntax node)
        {
        }

        public void Visit(GreenNode node)
        {
        }
    }
}
