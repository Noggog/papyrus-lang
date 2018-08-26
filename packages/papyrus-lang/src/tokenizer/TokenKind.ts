export enum TokenKind {
    Unknown,
    Identifier,

    SingleLineCommentTrivia,
    DocumentationCommentTrivia,
    MultilineCommentTrivia,
    NewLineTrivia,
    WhitespaceTrivia,

    StringLiteralContent,
    HexLiteral,
    IntLiteral,
    FloatLiteral,

    EndOfFileToken,

    OpenBraceToken,
    CloseBraceToken,
    OpenParenToken,
    CloseParenToken,
    OpenBracketToken,
    CloseBracketToken,
    DotToken,
    SemicolonToken,
    CommaToken,
    LessThanToken,
    GreaterThanToken,
    LessThanEqualsToken,
    GreaterThanEqualsToken,
    EqualsEqualsToken,
    ExclamationEqualsToken,
    PlusToken,
    MinusToken,
    AsteriskToken,
    SlashToken,
    PercentToken,
    PlusPlusToken,
    MinusMinusToken,
    ExclamationToken,
    AmpersandAmpersandToken,
    BarBarToken,
    DoubleQuoteToken,
    EqualsToken,
    PlusEqualsToken,
    MinusEqualsToken,
    AsteriskEqualsToken,
    SlashEqualsToken,
    PercentEqualsToken,
    BackslashToken,
    SemicolonSlashToken,
    SlashSemicolonToken,
    ArrayToken,

    AsKeyword,
    AutoKeyword,
    AutoReadOnlyKeyword,
    BetaOnlyKeyword,
    ConstKeyword,
    CustomEventKeyword,
    DebugOnlyKeyword,
    ElseIfKeyword,
    ElseKeyword,
    EndEventKeyword,
    EndFunctionKeyword,
    EndGroupKeyword,
    EndIfKeyword,
    EndPropertyKeyword,
    EndStateKeyword,
    EndStructKeyword,
    EndWhileKeyword,
    EventKeyword,
    ExtendsKeyword,
    FunctionKeyword,
    GlobalKeyword,
    GroupKeyword,
    IfKeyword,
    ImportKeyword,
    IsKeyword,
    NativeKeyword,
    NewKeyword,
    PropertyKeyword,
    ReturnKeyword,
    ScriptNameKeyword,
    StateKeyword,
    StructKeyword,
    WhileKeyword,
    TrueKeyword,
    FalseKeyword,
    NoneKeyword,
}