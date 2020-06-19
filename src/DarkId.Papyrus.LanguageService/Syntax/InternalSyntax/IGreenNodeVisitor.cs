using System;
using System.Collections.Generic;
using System.Text;

namespace DarkId.Papyrus.LanguageService.Syntax.InternalSyntax
{
    internal interface IGreenNodeVisitor
    {
        void Visit(ExpressionSyntax node);
        void Visit(GreenNode node);
    }

    internal interface IGreenNodeVisitor<out T>
    {
        T Visit(ExpressionSyntax node);
        T Visit(GreenNode node);
    }
}
